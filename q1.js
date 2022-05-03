
    let res=[];
    let n=100;
    for(let i=2;i<=n;i++){
        res.push(0);
       
    }
  
    
    for(let i=2;i<=n;i++){
        if(res[i]==0){
            for(let j=i*i;j<=n;j+=i){
                res[j]=1;
            }
        }
    }
    for(let i=2;i<=n;i++){
        if(res[i]==0){
            console.log(i);
            
        }
    }




