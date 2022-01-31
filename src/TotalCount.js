import './App.css';

const TotalCount = props => {
    // console.log(props);
        var cnt = 0;        
           props.count.map(data => (
               cnt += (data.confirmed)
               ))
            //    console.log(cnt);
               return cnt;       
            // console.log(typeof(cnt));
            // if (cnt === 0) {
            //     return null;
            // }else{
            //     return cnt;       
            // }
}

export default TotalCount;
