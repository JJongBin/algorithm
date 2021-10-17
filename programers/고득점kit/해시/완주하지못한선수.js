function solution(participant, completion) {
    const hash = new Map();
    for (const p of participant){
        hash.set(p, (hash.get(p) || 0) + 1);
    }
    for (const c of completion){
        if(hash.has(c)){
            hash.set(c, hash.get(c) - 1);
            if(hash.get(c) === 0){
                hash.delete(c);
            }
        }
    }
    for(const key of hash) return key[0];
}