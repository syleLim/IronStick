const solution = (arrangement) => {
    let answer = 0;
    let test = 0;
    let i;
    
    i = -1;
    while (++i < arrangement.length)
    {
        if (arrangement[i] === '(')
        {
            ++test;
            if (arrangement[i + 1] === ')')
            {
                --test;
                answer += test;
                ++i;
            }
            continue;
        }
        else
        {
            answer++;
            test--;
        }
    }
    
    return answer;
}