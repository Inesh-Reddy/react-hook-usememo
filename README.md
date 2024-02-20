# UseMemo



- Before we start , lets understand what memoization means
It’s a mildly DSA concept, It means remembering some output given an input and not computing it again. {sort of caching thing}.

Let's understand `UseMemo` by doing some assignments:

- If I ask you to create an app that does two things :-

        1. Increases a counter by 1.
        2. Lets user put a value in an input box (n) and you need to show sum from 1-n.

        Note:- Everything needs to be inside App.


- The above appraoch will renders everythig inside the App component.. if we don't use `useMemo`. Ofcourse, there are other ways ..the optimal appraoach is using useMemo. 

making use of `useMemo` will stop the unnecessary renders.

        // optimal solution: only renders when inputvalue dependency changes [inputvalue render will happen sequentially].

        let count = useMemo(()=>{
            let finalCount=0;
            for(let i=1; i<=inputValue; i++){
            finalCount = finalCount+i;
            }
            return finalCount;
        }, [inputValue])

        //ugly solution: renders all the time(even if the inputvalue doesn't chage).

         let count = 0;
         for (let i = 1; i <= inputValue; i++) {
           count = count + i;
         }

- The  other close to  optimal solution is  :
    //[2 renders will happen : 1-> inputValue render, 2-> count render].
    Using useEffect : 
        

        add a state varaible :
            const [count, setCount] = useState();

        useEffect(()=>{
            let finalCount =0;
            for (let i = 1; i <= inputValue; i++) {
                finalCount = finalCount + i;
            }
            setCount(finalCount);
        },[inputValue])