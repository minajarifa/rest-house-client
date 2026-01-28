import PropTypes from 'prop-types'
import { format } from 'date-fns'

const RoomDataRow = ({ room, refetch,handleDelete }) => {
  return (
    <tr>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='relative block'>
              <img
                alt='profile'
                src={room?.image}
                className='object-cover h-10 mx-auto rounded w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{room?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>{room?.location}</p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>${room?.price}</p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(room?.from), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(room?.to), 'P')}
        </p>
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 rounded-full opacity-50'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        {/* Delete modal */}
      </td>
      <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
        <span className='relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 rounded-full opacity-50'
          ></span>
          <span className='relative'>Update</span>
        </span>
        {/* Update Modal */}
      </td>
    </tr>
  )
}

RoomDataRow.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func,
}

export default RoomDataRow