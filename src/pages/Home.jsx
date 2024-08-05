import Hero from '../components/Hero';
import Cards from '../components/Cards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
const Home = () => {
  return (
    <>
    <Hero />
    <Cards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default Home