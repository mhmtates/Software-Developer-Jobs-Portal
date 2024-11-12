
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmitHandler }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Hybrid/Tam Zamanlı');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [qualification,setQualification] = useState('');
  const [salary, setSalary] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const addJobHandler = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      qualification,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmitHandler(newJob);

    toast.success('İş ilanı başarılı bir şekilde eklendi.');

    return navigate('/is-ilanlari');
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={addJobHandler}>
            <h2 className='text-3xl text-center font-semibold mb-6'>İş İlanı Ekle</h2>

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
                rows='6'
                placeholder='Açıklama giriniz.'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='qualification'
                className='block text-gray-700 font-bold mb-2'
              >
                 Aranan Nitelikler
              </label>
              <textarea
                id='qualification'
                name='qualification'
                className='border rounded w-full py-2 px-3'
                rows='10'
                placeholder='Aranan nitelikleri giriniz.'
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='salary'
                className='block text-gray-700 font-bold mb-2'
              >
                Maaş
              </label>
              <input
                type='text'
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Maaş giriniz.'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)} />
            </div>

            <div className='mb-4'>
              <label htmlFor='location' className='block text-gray-700 font-bold mb-2'>
                Konum
              </label>

            </div>
            <select
              id='location'
              name='location'
              className='border rounded w-full py-2 px-3'
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >

              <option value='Ümraniye/İstanbul'>Ümraniye/İstanbul</option>
              <option value='Esenler/İstanbul'>Esenler/İstanbul</option>
              <option value='Pendik/İstanbul'>Pendik/İstanbul</option>
              <option value='Kağıthane/İstanbul'>Kağıthane/İstanbul</option>
              <option value='Ataşehir/İstanbul'> Ataşehir/İstanbul</option>
              <option value='Kadıköy/İstanbul'>Kadıköy/İstanbul</option>
              <option value='Ankara'>Ankara</option>
              <option value='İzmir'>İzmir</option>
              <option value='Kocaeli'>Kocaeli</option>
             
            </select>

            <h3 className='text-2xl my-5'>Şirket Bilgileri</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Şirket Adı
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Şirket adı'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Şirket Hakkında
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='7'
                placeholder='Şirket hakkında bilgiler veriniz.'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                 EMail
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email giriniz.'
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
                Telefon
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Telefon numarası giriniz.'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                İlanı Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJobPage;
