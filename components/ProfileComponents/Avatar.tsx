import { useUser } from "@auth0/nextjs-auth0"
import Link from "next/link"






const Avatar = () => {
    const {user,error,isLoading} = useUser()
    
  return (
    <section className="avatar-section">
        <div className="container">
            <div className="avatar-section__holder">
                <div className="avatar-section__holder__avatar">
                    <img src={user?.picture || ''} alt={user?.name || ''} />
                </div>
                <div className="avatar-section__holder__info">
                    <div className="avatar-section__holder__info__name headline-xs">{user?.nickname}</div>
                    <div className="avatar-section__holder__info__email link-l">{user?.email}</div>
                    <div className="avatar-section__holder__info__id link-id">{user?.sub}</div>
                    <Link href='/api/auth/logout'><div className="avatar-section__holder__info__logout  link-l">Logout</div></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Avatar