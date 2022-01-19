interface UserData {
  name: string;
  location: string;
  foodType: string;
  age: number;
  likes: string;
  twitterUsername: string;
  avatar: string;
}

export function UserCard(props: { userData: UserData }) {

  return (
    <section className='p-4 bg-white w-full sm:w-auto sm:border sm:rounded-xl h-full sm:h-auto'>
      <img className='mx-auto w-44 h-44 rounded-full' src={props.userData.avatar} alt={props.userData.name} />
      <div className="my-4 text-center">
        <a className='text-6xl text-blue-500 hover:text-blue-700' href={'https://twitter.com/' + props.userData.twitterUsername}>{props.userData.name}</a>
        <div>
          <label className='text-gray-500 text-sm' htmlFor="twitter">twitter</label>
          <a className='ml-2 text-blue-500 hover:text-blue-700' id='twitter' href={`https://twitter.com/${props.userData.twitterUsername}`}>@{props.userData.twitterUsername}</a>
        </div>
      </div>
      <div className='flex flex-col space-y-2 capitalize'>
        <div>
          <label className='text-gray-500 text-sm' htmlFor="location">location</label>
          <div className='text-lg' id='location'>{props.userData.location}</div>
        </div>
        <div>
          <label className='text-gray-500 text-sm' htmlFor="eats">eats</label>
          <div className='text-lg' id='eats'>{props.userData.foodType}</div>
        </div>
        <div>
          <label className='text-gray-500 text-sm' htmlFor="ages">age</label>
          <div className='text-lg' id='ages'>{props.userData.age}</div>
        </div>
        <div>
          <label className='text-gray-500 text-sm' htmlFor="likes">likes</label>
          <div className='text-lg' id='likes'>{props.userData.likes}</div>
        </div>
      </div>
    </section>
  )
}