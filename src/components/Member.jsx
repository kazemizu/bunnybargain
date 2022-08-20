import { dataMember } from '../data/data'

export const Member = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col items-center justify-center py-12 space-y-12'>
        <h1 className='text-4xl text-primary_color_purple text-bold bg-primary_color_purple_hex/60  p-2'>Meets Bunnian Bargain</h1>
        <div className='w-full max-w-[50%] grid grid-cols-2 gap-12 px-5'>
          {dataMember && dataMember.map((item) => {
            return (
              <div key={item.id} className='grid grid-cols-4 gap-x-3'>
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAM1BMVEXh4eGjo6OgoKDk5OSnp6fa2tre3t7BwcG7u7uqqqrR0dHW1ta2trbNzc3GxsbJycmwsLABcKSBAAACfUlEQVRoge2aC5KsIAxFhfAJoOj+V/uwHXumZxQQCFWvirsATyUBwg1O09DQ0NDQ0NB/IzjUGypXjYh6lR3R4JDxUwxdHzLYLdC+xflm6ckw4Qf1IONETAZpflNfZCNJweDEFTaABWmVlbik7hKKDguXST5TTRYw6HtsAGsqsIxhA1jSYGFOcGeagGWUuosk4Hh1CSu8JePdKLDpNNMk2qbSHBJt22NhyeAu7QsMPoPrB7daWfVtj51cEsuYI+BGeu8pkh6cagtUjSG9gSm275SRaKKrTqoh0V04EvESUYNTiN6v6FxDLNN0WZ5ie4nqcnXqBsxnUmrQZaq5psaGxfXHNHDTwYgGx+nNDyvKufHULvRNtigOx88E2k7UAw3K2cU61XuyMjQ0NPRUAL0HwTtMumX1Wmu/Lk52oAeA82i+p8Cv3mDQu4mMHT5s9Qv5t+3vcG0p2KCWWVwgf8LFvKim5JDdBPSNRtesHYdQtwzoid7aBA3TGpnCXqLNWh8zLA+pB7nSGYJKmt4b8lyT7GCIyrB7ncvvtjkjnAi5dLiTHsAmwGVOLWcwmAAXra7EVD8LXDKfLVzJH9wCl9gg3JKAaxfVF/f50pobYBl7nugG5S0qsGqAZez5JK1++xZuYMDqcwPLTsqt8pwsfk66eWTOxJaPSVUFuAI7gSwGc1Hz4g+lEYdo6246qmhx8a1+BF6wnThWU18HyMN7bKN3BpCPcs23Zv+QwJq9vLhYG1okUMhyyJxhW2cWkp0mByrBbzqgfMwTBi/oG8f6JoNDceO7gwGlnDYASD8b/ikz+w6/uwGAktbvv9cham+l6jjVAeg/SBoaGhoaGhqq1D+1+hbromjtKQAAAABJRU5ErkJggg==" alt="profile" className='rounded-full' />
                </div>
                <div className='col-span-3'>
                  <h1>{item.name}</h1>
                  <p>{item.role}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}