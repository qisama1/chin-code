```java
    public static void main(String[] args) {

    }

    private void test(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = arr.length;
        long sum = 0;
        for (int i = 0; i < n; i ++ ) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        Pair[] pairs = new Pair[map.size()];
        int idx = 0;
        for (Map.Entry<Integer, Integer> entry : Map.entrySet) {
            pairs[idx] = new Pair(entry.getKey(), entry.getValue());
        }
        Collections.sort(pairs, (o1, o2) -> {
            return o1.num - o2.num;
        });
        for (int i = 0; i < pairs.length; i ++) sum += pairs[i].num;
        long mean = sum / n;
        int r = pairs.length - 1;
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i <= r; i ++) {
            int total = 0;
            List<Integer> cur = new ArrayList<>();
            cur.add(pairs[i].id);
            total += pairs[i].num;
            for (int j = r; j > i && total < mean; j --) {
                total += pairs[j].num;
                cur.add(pairs[j].id);
                r --;
            }
            res.add(cur);
        }
    }
    
    class Pair {
        int id;
        int num;
        public Pair (int id, int num) {
            this.id = id;
            this.num = num;
        }
    }
```