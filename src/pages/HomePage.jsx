
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title = 'Yazılım Geliştirici İş İlanları' subtitle = 'Becerilerinize uyan en doğru işi bulun'/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage;