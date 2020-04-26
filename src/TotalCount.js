import './App.css';

const TotalCount = props => {
        var cnt = 0;        
           props.count.map(data => (
               cnt += (data.confirmed)
            ))

        return cnt;       

}

export default TotalCount;
