from collections import *

class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        result = 0
        for T in range(1, len(Counter(s))+1):
            start, end, UniqueT, freq, found = 0, 0, 0, [0]*26, 0
            while end < len(s):
                if UniqueT <= T:
                    ch = ord(s[end])-97
                    freq[ch] += 1
                    if freq[ch] == 1:
                        UniqueT += 1
                    if freq[ch] == k:
                        found += 1
                    end += 1
                else:
                    ch = ord(s[start])-97
                    start += 1
                    if freq[ch] == k:
                        found -= 1
                    freq[ch] -= 1
                    if freq[ch] == 0:
                        UniqueT -= 1
                    
                if UniqueT == T and found == T:
                    result = max(result, end - start)
                    
        return result

if __name__ == "__main__":
    s = Solution()
    print(s.longestSubstring('ababbc', 2))