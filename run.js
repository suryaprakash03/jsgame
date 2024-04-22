// let e = document.getElementsByTagName('h2');
// let namevalue = document.getElementById("name").value;
// let toggle = 0;
// let c=50;
// let t=0;
// let cw = 250;
// let timerid = 0;
// let st =0;
// let points = 0;
// function loop()
// {
//     timerid=setInterval(()=>{
//         drag(e);
//         for(let i=0;i<e.length;i++)
//         {
//             e[i].style.visibility="visible";      
//             e[i].style.animationName="example";     //show the egg and start animation
//         }
//         t=t+5;
//         if(t == 10)
//         {
//             let sb = document.createElement('h2');                 //7*12 = 84 sec
//             document.getElementById("background").appendChild(sb);
//             sb.innerText="*";
//             sb.setAttribute('id','two');
//             sb.style.width="15px";
//             sb.style.height="30px";
//             sb.style.borderRadius="50%";
//             sb.style.color="white";
//             sb.style.backgroundColor="white";
//             sb.style.boxSizing="border-box";
//             sb.style.position="absolute";
//             sb.style.visibility="hidden";
//             sb.style.animationDuration="7s";
//             sb.style.animationIterationCount="infinite";
//             sb.style.animationName="example1";
//             console.log(sb);
//             //for second egg
//         }
//         console.log(t);
//     },7000);

// }
let ar=[];
let l =ar.length;
let t=5000;
let at = t/1000;
let ci = t/10;
let tim1;
let cw=250;
let c=50;
let it = 0;
let toggle = 0;
let points = 0;
function user()                           // 1 entry function to start setinterval              
{
    create();
    tim1=setInterval(()=>{
        it = t + it;
        if(ar.length != 0)
        {
            drag(ar);
        }
        if(it == 15000)
        {
            t = t - 2000;
            at = t / 1000;
            ci = t / 10;
        }
        else if(it == 24000)
        {
            t = t - 2000;
            at = t / 1000;
            ci = t / 10;
            
        }
        console.log(t);
    },t);
}
function create()                           // 2 create element
{
    let sb = document.createElement('h2');                 
    sb.innerText="*";
    ar.push(sb);
    l=ar.length;
    estyle(ar[l-1]);
    drag(ar);
    check();                                 //change button start check at first before setinterval
    document.getElementById("background").appendChild(sb);
    sb.style.animationName="example";       //two elements having same animation name but different timings
}
function estyle(e)
{
    e.style.width="15px";
    e.style.height="30px";
    e.style.borderRadius="50%";
    e.style.color="white";
    e.style.backgroundColor="white";
    e.style.boxSizing="border-box";
    e.style.position="absolute";
    e.style.visibility="visible";
    e.style.animationTimingFunction="linear";
    e.style.animationDuration=at+"s";
    e.style.animationIterationCount="infinite";
}
function move(event)                //no prb simply captures left right arrow event
{
            if(cw >= 10 && cw <= 440)
            {
                if(event.key == "ArrowRight")
                {
                    player.style.marginLeft = (cw + 10) + "px";
                    cw =cw + 10;
                }
                else if(event.key == "ArrowLeft")
                {
                    player.style.marginLeft = (cw - 10) + "px";
                    cw = cw - 10;
                }
            }
            else
            {
                if(cw > 440)
                {
                    cw = cw - 10;
                }
                else if(cw == 0)
                {
                    cw = cw + 10;
                }
            }
        }
        function drag(ar)
        {
            let l = ar.length;
            switch(l)
            {
                case 1:{
                    ar[l-1].style.marginLeft=c+"px";
                    c=Math.floor((Math.random()*475)+1);
                    break;
                }
            }
        }
        function check(s)        //first function to enter into game and check the coordinates matching
        {
       let one = 0;
       let two = 0;
       let a = 0;   //use for lose count calculation 7000/500 14 cycles
       let lose = 1;
       namevalue = document.getElementById("name").value;
       document.getElementById("name").style.visibility="hidden";
       document.getElementsByTagName('b')[0].innerText=namevalue;
       if(s == "focus")
       {
           player.focus();
        }
        player.style.width="50px";
        player.style.height="20px";
        player.style.borderRadius="0px";
        player.style.marginLeft="225px";
        player.style.marginTop="480px";
        player.setAttribute('value',"\\___/");
        player.style.caretColor="transparent"; //to avoid blinking icon
        st=setInterval(()=>{
            background.style.boxShadow = "0px 0px 5px white";
            two = Math.trunc((player.getBoundingClientRect().x)+(player.getBoundingClientRect().y));
            one = Math.trunc(ar[0].getBoundingClientRect().x+ar[0].getBoundingClientRect().y);
            if(Math.abs(one - two) < 50 )
            {
                points = points + 5;
                document.getElementsByTagName('b')[1].innerText=points;
                background.style.boxShadow = "0px 0px 50px green";
                player.style.zIndex = "1";
                a=0;
            }
            else
            {
                a++;
                if(a == 11)
                {
                    document.getElementsByTagName('b')[2].innerText=lose;
                    lose++;
                    background.style.boxShadow = "0px 0px 50px red";
                    a=0;
                }
                if(lose == 4)
                {
                    clearInterval(tim1);
                    stop("out")
                }
            }
            console.log(a);
            console.log(one+" "+two);
            console.log("-----")
        },ci)
    }
        function stop(res)    //used to pause the game and resume
        {
            if(toggle == 0)
            {
                document.getElementsByTagName("img")[0].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///8uLi4jIyOfn5+RkZHs7Ozv7++Xl5ezs7P6+vo9PT13d3fQ0NBERETz8/NKSkoTExNiYmI5OTmCgoKvr6/f39+9vb3FxcVQUFBYWFikpKQaGholJSVwcHDW1tZ/f38WFhaSkpJ5F9TQAAADJ0lEQVR4nO2dW08bMRBGGUpuS0MgXZqUUAj9/z+ykxekqmr3EntsfzrnOYp8lM16xh6Pb24AAAAAAAAAAAAAAAAAAAAAAAAAAHLzul4Msn4qPcpruLUR/Bz4kv0+ZKzzGGX4ZeBL7panoY+UI42hdcu3kOHOIJGh834fMuDJpDM023wLGfJEUhraalGhY1JDs2Nf3cyS2NAf1dpeOckNbfn8EDLysaQ3NPu+CBn6SHIYuuNLyOBHkcfQ7HAbMvwR5DK0bl1JBJDN8PJ3rOJ3zGjos+M5QmGArIa2OzyGWPyPvIb+qBbPq3IbuuPXEJF/kt/QbFs0yIkwNCs5c8QY2qov5hhk6I/q+TVE6C/CDH3mKLMiF2foedWmRHocaegzRx8i9QexhiXyqmhDz6t+hIh9Em9o3SI0AihgaPbeB+ZVRQytO8YFq2UMPcg5RD2qpQx9djyFCBY09CgnZOYoaWh2DJg5yhra7pR9maOw4WVFLvN+VXHD7CtyFRhmzqtqMLzsVw2Ve7Ru6BFAtiCnFkP/He/z5Mf1GHpe9ZjDsSZDW60zBKtVGZptF8lX5Coz9LwqdaVDbYaXFbm0QU59hu74S93Qg9WEj2qdhh6sPqSaOWo1tO4uUe5YrWGyvKpiQ+u2Z3FDD3K21y8B1G3ojht1Q58dr8yr6jf0YHX/IW5o9nzFymobhh7Iza50aMTQH9V+ZnFVM4a2m5lXtWPojps5b5yWDJ0ZlQ6NGdrybWrO0Zqh2eFlmmN7hrY7TZodGzT0AEDcUP43VP8fyr9LxedD9ZhGPi5Vzy3k80P1HF99nUZ9rU19vVR9zVt+30J970l+/1B9D1h9H1+9FkO9nka+Jkq9rk2+NlG9vlS9Rli9zlu9Vl/+vIX6mRn1c0/yZ9fUzx+qnyFVPwesfpZb/jy+ek8F+b4Y6r1N1PvTqPcYUu8TJd/rS71fm3zPPfW+ieq9L9X7l6r3oJXvI6zeC1q9n7d8T3b1vvrqdyOo328hf0eJ+j0z6ncFyd/3pH5nl/i9a/J35zV//2HTd1jq30MKAAAAAAAAAAAAAAAAAAAAAAAAADCP3/MDSwYWAlU2AAAAAElFTkSuQmCC";
                clearInterval(tim1);
                clearInterval(st);
                for(let i=0;i<l;i++)
                {
                    ar[i].style.animationName="stop";
                }
                toggle = 1;
                if(res == "out")
                {
                    document.getElementById("result").style.visibility="visible";
                    document.getElementsByTagName('i')[0].innerText=namevalue;
                    document.getElementsByTagName('i')[1].innerText=String(points);
                }
            }
            else
            {
                toggle=0;
                document.getElementsByTagName("img")[0].src="data:image/png;base64,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";
                check("focus");
                for(let i=0;i<l;i++)
                {
                    ar[i].style.animationName="example";
                }
            }
        }