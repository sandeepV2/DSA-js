from abc import ABC
from typing import List, Generator
from datetime import datetime
from time import localtime
from lib.clients import BaseLogClient, ProdLogClient
# from lib.entities import ActivityLog, EntityType, ActivityType

import dataclasses
from enum import Enum
import pprint
from typing import Any, List

# Enums
class EntityType(Enum):
 USER = 1
 APP = 2
 
class ActivityType(Enum):
 ADD = 1
 UPDATE = 2
 DELETE = 3
 

# Dataclasses
@dataclasses.dataclass
class Attribute:
 attribute_name: str
 attribute_value: Any

 def __lt__(self, another_attribute):
    return self.attribute_name < another_attribute.attribute_name

 
@dataclasses.dataclass
class ActivityLog:
 entity_type: EntityType
 entity_id: int
 activity_type: ActivityType
 latest_attributes: List[Attribute]
 time_stamp: datetime
 
 def __str__(self):
  return pprint.pformat(dataclasses.asdict(self))


class ActivityLogIngester(ABC):
 def __init__(self, client: BaseLogClient, **kwargs):
   self.client = client
 
 def parse_data(self) -> List[ActivityLog]:
    data = self.client.get_log_data()
    print(data)
    activity_logs = []
    for entry in data:
      entity_type = EntityType[entry["activity_type"].split(" ")[1].upper()]
      entity_id = int(entry["target_id"])
      activity_type = ActivityType[entry["activity_type"].split(" ")[0].upper()]
      if entry["new_value"] is not None:
        attributes = [Attribute(attr_name, attr_value) for attr_name, attr_value in entry["new_value"].items()]
      else:
        attributes = []
      time_stamp = localtime(entry["change_timestamp"])
      activity_log = ActivityLog(entity_type, entity_id, activity_type, attributes, time_stamp)
      #yield activity_log
      activity_logs.append(activity_log)
    return activity_logs

if __name__ == "__main__":
  credentials="CREDENTIALS"
  client = ProdLogClient(credentials=credentials)
  ingester = ActivityLogIngester(client=client)

  activity_logs = ingester.parse_data()
  assert activity_logs is not None

  user_activities = [
    activity_log for activity_log in activity_logs if activity_log.entity_type == EntityType.USER and activity_log.activity_type == ActivityType.ADD
  ]

  assert len(user_activities) > 0

  for log in activity_logs:
    print(str(log))