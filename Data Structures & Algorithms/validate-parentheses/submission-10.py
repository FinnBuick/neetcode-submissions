class Solution:
    def isValid(self, s: str) -> bool:
        hm = {")":"(","}":"{", "]":"["}
        opening = set(hm.values())
        stack = []
        for i, c in enumerate(s):
            if c in opening:
                stack.append(c)
            else:
                if len(stack) == 0:
                    return False
                if hm[c] != stack[len(stack) - 1]:
                    return False
                stack.pop()
        return len(stack) == 0