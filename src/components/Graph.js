import Bottom from './Bottom';

import data from './data.json'

import './Graph.css'


function Graph () {
    
    let values = [];
    data.forEach((element, key) => {
        values.push(parseFloat(element.amount))
    });

    const maxValue = Math.max.apply(null, values)

    return (
        <div className="graph">
            <h2>
                Spending - Last 7 days
            </h2>

            <ul className='days'>
            {data.map( (item, index) =>
                <>
                    <li>
                        <div className='amount'>${item.amount}</div>
                        { item.amount === maxValue ?
                            <div className='max bar' style={{height:`${item.amount*2}px`}}></div> :
                            <div className='bar' style={{height:`${item.amount*2}px`}}></div> }
                        {item.day}
                    </li>
                </>
            )}
            </ul>
            <Bottom total={478.33} />

        </div>
    )
}

export default Graph