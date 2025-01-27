import './filter.scss'

function Filter() {
    return (
        <div className='filter'>
            <h1>Search result for <b>London</b></h1>
            <div className='top'>
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' id='city' placeholder='City location' />
                </div>
            </div>
            <div className='bottom'></div>
        </div>
    )
}

export default Filter
