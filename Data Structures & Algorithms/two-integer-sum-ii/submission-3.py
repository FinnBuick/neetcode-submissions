class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # two pointers, if current sum is too large decrement r
        # otherwise increment l
        l = 0
        r = len(numbers) - 1
        while l < r:
            curr = numbers[l] + numbers[r]
            if curr == target:
                return [l + 1, r + 1]
            elif curr < target:
                l += 1
            else:
                r -= 1
        return ValueError()