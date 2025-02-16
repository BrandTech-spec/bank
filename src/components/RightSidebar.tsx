
import BankCard from './BankCard'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'
import { Link } from 'react-router-dom';
import { CategoryCount, RightSidebarProps } from '@/types';
import { Models } from 'appwrite';

const RightSidebar = ({ user, banks }:{user:Models.Document} ) => {
  //const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold uppercase text-blue-500">{user?.firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className='profile-name'>
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-email">
              {user?.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link to="/" className="flex gap-2">
            <img 
               src="./icons/plus.svg"
              className='w-20 h-20'
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

 
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10'>
              <BankCard 
                
                userName={`${user?.firstName} ${user?.lastName}`}
                showBalance={false}
              />
            </div>
            
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  
                  userName={`${user?.firstName} ${user?.lastName}`}
                  showBalance={false}
                />
              </div>
            
          </div>
        

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          {/*<div className='space-y-5'>
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>*/}
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar