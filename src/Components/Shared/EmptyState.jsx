import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button/Button'
const EmptyState = ({ message, address, label }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5 pb-16 '>
      <p className='text-xl text-gray-600 lg:text-3xl'>{message}</p>
      <Link to={address}>
        <Button label={label} />
      </Link>
    </div>
  )
}

EmptyState.propTypes = {
  message: PropTypes.string,
  address: PropTypes.string,
  label: PropTypes.string,
}

export default EmptyState