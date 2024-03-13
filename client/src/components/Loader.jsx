/* eslint-disable react/prop-types */
import { infinity } from 'ldrs'
infinity.register('my-precious')

const Loader = ({ isLoading }) => {
    return <div className='w-full flex justify-center' >

        {isLoading ? <div className='' ><my-precious color="white"></my-precious></div> : null}
    </div>
}

export default Loader