import Card from "../components/Card.course.jsx";
import Category from "../components/Category.jsx"
export default function Institutions() {
  return (
    <div className=" min-h-screen w-full flex flex-row gap-2 pt-2">
      <div className="bg-white  w-48 rounded-lg mx-2">
        <h2 className="text-lg m-1 p-1">filter by :</h2>
        <div className="flex flex-col border-t-2  border-slate-200">
            <Category title="universities"/>
            <Category title="private institutions"/>
            <Category title="TVET"/>
            
            <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3">view more</button>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-lg ">
        <h2 className="text-lg capitalize font-semibold p-2 mb-1 inline-block">institutions </h2>
        <div className="flex flex-wrap gap-2 border-t-2  border-slate-200  items-center p-4" >
      <Card 
      title='JKUAT'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      
      Url= 'https://www.jkuat.ac.ke/'
      />
       <Card 
      title='Agmond international Limited'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
        <Card 
      title='Emobilis'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='don bosco tech'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='tinker education'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='aldai technical training institute'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='computer pride'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='wote ttc'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='kaiboi national polytechnic'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='Kenya institute of proffesional studies'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
       <Card 
      title='matili technical'
      imageUrl="https://imgs.search.brave.com/GjZyCzUGTUKYlMUMogIlcjC-4Z_T7H6sEsi6oWrHxZM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlhL0pLVUFULU1h/aW4tQ2FtcHVzLUdh/dGUtQS5qcGc" 
      />
        </div>
      </div>
    </div>
  )
}
