import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmitHandler }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const updateJobHandler = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmitHandler(updatedJob);

    toast.success('İş ilanı başarılı bir şekilde güncellendi.');

    return navigate(`/is-ilani/${id}`);
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={updateJobHandler}>
            <h2 className='text-3xl text-center font-semibold mb-6'>İş İlanını Güncelle</h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Türü
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Hybrid/Tam Zamanlı'>Hybrid/Tam Zamanlı</option>
                <option value='İş Yerinde/Tam Zamanlı'>İş Yerinde/Tam Zamanlı</option>
                <option value='Yarı Zamanlı'>Yarı Zamanlı</option>
                <option value='Remote'>Remote</option>
                <option value='Staj'>Staj</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                İş İlanı Adı
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Bir iş ilanı giriniz.'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Açıklama
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='10'
                placeholder='Açıklama giriniz.'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Maaş
              </label>
               <input 
                 type = 'text'
                 id ='salary'
                 name = 'salary'
                 className='border rounded w-full py-2 px-3 mb-2'
                 placeholder='Maaş giriniz.'
                 required
                 value={salary}
                 onChange = {(e) => setSalary(e.target.value)} />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                 Lokasyon
              </label>
              
            </div>
            <select 
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3'
              required
              value={location}
              onChange={(e)=> setLocation(e.target.value)}
            > 

            <option value='İstanbul/Avrupa'>İstanbul/Avrupa</option>
            <option value='İstanbul/Anadolu'>İstanbul/Anadolu</option>
            <option value='Ankara'>Ankara</option>
            <option value='İzmir'>İzmir</option>
            <option value='Bursa'>Bursa</option>
            <option value='Kocaeli'>Kocaeli</option>
            <option value='Antalya'>Antalya</option>
            <option value='Kayseri'>Kayseri</option>
            <option value='ABD'>ABD</option>
            <option value='Almanya'>Almanya</option>
            <option value='İngiltere'>İngiltere</option>
            <option value='Fransa'>Fransa</option>
            <option value='Diğer'>Diğer</option>
           </select>

            <h3 className='text-2xl my-5'>Şirket Bilgileri</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
               İlanı Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditJobPage;
