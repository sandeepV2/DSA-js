import requests

from abc import ABC, abstractmethod
from typing import Dict, List


class BaseLogClient(ABC):
 base_url: str
 @abstractmethod
 def get_log_data(self) -> List[Dict]:
   """
   Calls the API to return activity logs
   Returns:
     {
       "activity_type": "Add user",
       "target_id": "1",
       "old_value": {"foo": "bar"},
       "new_value": {"foo": "bar2"},
       "change_timestamp": 1650333433,
     },
     {
       "activity_type": "Delete app",
       "target_id": "2",
       "old_value": {"foo": "bar"},
       "new_value": None,
       "change_timestamp": 1650333433,
     }
 
   """
   pass

class ProdLogClient(BaseLogClient):
  base_url="https://{}.mockapi.io/api/activity_logs"

  def __init__(self, credentials) -> None:
    self.base_url = self.base_url.format(credentials)
    self.base_url = "http://localhost:8000/test_api"

  def get_log_data(self) -> List[Dict]:
    data = requests.get(self.base_url)
    return data.json()