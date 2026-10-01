
import Cards from './Cards';

const Course = () => {
    return (
        <div className=' container mx-auto '>
            <h2 className='text-4xl'>Explore the <span> Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            
            <Cards></Cards>

        </div>
    );
};

export default Course;