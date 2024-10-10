def longest_substring_k_distinct(s, k):
    char_count = {}
    max_length = 0
    left = 0

    for right in range(len(s)):
        char_count[s[right]] = char_count.get(s[right], 0) + 1

        while len(char_count) > k:
            char_count[s[left]] -= 1
            if char_count[s[left]] == 0:
                del char_count[s[left]]
            left += 1

        max_length = max(max_length, right - left + 1)

    return max_length

# Test the function
s = "abcba"
k = 2
result = longest_substring_k_distinct(s, k)
print(result)  # Output: 3
