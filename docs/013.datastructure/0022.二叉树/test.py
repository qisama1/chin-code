import math
def test1(r):
    s = math.pi * r * r
    c = 2 * math.pi * r
    print(s, c)

def test2(pm):
    if (pm < 75):
        print("空气质量良好")
    else:
        print("有污染")

def test3():
    print("{}{}".format("11 * 13 * 15 * 17 * 19 ", 11 * 13 * 15 * 17 * 19))