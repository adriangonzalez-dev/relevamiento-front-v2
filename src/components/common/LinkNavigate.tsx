import { NavLink } from 'react-router-dom';

interface Props {
    toRef: string;
    title: string;
}

export const LinkNavigate = ({toRef, title}:Props) => {
  return (
    <NavLink color="foreground" to={toRef} className={({isActive})=> isActive ? 'text-blue-500' : 'text-gray-700'}>
            {title}
    </NavLink>
  )
}
