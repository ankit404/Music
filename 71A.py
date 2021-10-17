import sys
input = sys.stdin.readline


def inp():return(int(input()))
def inlt():return(list(map(int,input().split())))
def insr():
    s = input()
    return(list(s[:len(s) - 1]))
def invr():return(map(int,input().split()))


def solution(s):
    return s if len(s) <= 10 else (s[0] + str(len(s) - 2) + s[-1])

if __name__ == '__main__':
    n = inp()
    newS = []
    for _ in range(n):
        newS.append(solution(input().strip()))
    
    for s in newS:
        print(s)