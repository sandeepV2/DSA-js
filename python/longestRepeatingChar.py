def longest_repeating_character_replacement(s: str, k: int) -> int:
    ans = 0
    n = len(s)
    for c in range(ord('a'), ord('z') + 1):
      c = chr(c)
      i, j, replaced = 0, 0, 0
      while j < n:
        if s[j] == c:
          j += 1
        elif replaced < k:
          j += 1
          replaced += 1
        elif s[i] == c:
          i += 1
        else:
          i += 1
          replaced -= 1
        ans = max(ans, j - i)
      
    return ans