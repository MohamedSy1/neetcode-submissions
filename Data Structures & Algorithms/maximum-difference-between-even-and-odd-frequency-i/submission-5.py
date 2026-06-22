class Solution:
    def maxDifference(self, s: str) -> int:
        obj = {}

        for i, char in enumerate(s):
            if char in obj:
                obj[char] += 1
            else:
                obj[char] = 1

        a2 = float('inf')

        for val in obj:
            if obj[val] % 2 == 0:
                a2 = min(obj[val], a2)

        a1 = 0
        
        for val in obj:
            if obj[val] % 2 != 0:
                a1 = max(obj[val], a1)



        return a1 - a2
