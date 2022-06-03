import './Bottom.css'

function Bottom (props) {

    return (
        <>
        <div className='separator'></div>
        <div className='footer'>
            
            <div className='total'>
                <div className='title'>Total this month</div>
                <div id='value'>${props.total}</div>
            </div>
            <div className='aditional-info'>
                <div id='value'>+2.4%</div>
                <div className='title'>from last month</div>
            </div>
        </div>
        </>
    )
}

export default Bottom