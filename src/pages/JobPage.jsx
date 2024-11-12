// import {useState,useEffect} from 'react';
import { useParams, useLoaderData,useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobPage = ({deleteJob}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();
  /* <!-- UseState ve UseEffect Hooklarıyla Yapılışı --> */ 
  // const[job,setJob] = useState(null);
  // const [loading,setLoading] = useState(true);

  //   useEffect (()=>{
  //     const fetchJob = async () =>{
  //         try {
  //             const res = await fetch(`/api/job/${id}`);
  //             const data = await res.json();
  //             setJob(data);
  //           }
  //           catch (error) {
  //             console.log('Error fetching data', error);
  //           } finally {
  //             setLoading(false);
  //           }
  //     }

  //     fetchJob();
  //   },[])
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Bu iş ilanını silmek istediğinize emin misiniz?'
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success('Bu iş ilanı başarılı bir şekilde silindi.');

    navigate('/is-ilanlari');
  };

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/is-ilanlari'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> İş İlanları
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  İş Açıklaması
                </h3>

                <p className='mb-4'>{job.description}</p>
                <div className="detailed-description">
                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Aranan Nitelikler
                  </h3>
                   <div className='grid grid-cols-1'>
                    {job.qualification} 
                    </div> 
                </div>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Maaş
                </h3>

                <p className='mb-4'>{job.salary} </p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Şirket Bilgisi</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>E-Posta:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-xl'>Telefon :</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {' '}
                  {job.company.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>İşlemler</h3>
                <Link
                  to={`/ilani-duzenle/${job.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  İlanı Güncelle
                </Link>
                <button onClick={() => onDeleteClick(job.id)} className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  İlanı Sil
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export { JobPage as default, jobLoader };