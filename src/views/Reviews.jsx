import {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import {useUserContext} from '../hooks/contextHooks';
import {useReviews} from '../hooks/apiHooks';

const Reviews = () => {
  const {getReviews, addReview} = useReviews();
  const {user} = useUserContext();
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchReviews();
  }, [getReviews]);

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');

      await addReview(inputs, token);

      const res = await getReviews();
      setData(res);

      setInputs({ title: "", description: "" });

    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (inputs.title.length > 0 && inputs.description.length > 0) {
      doUpload();
    }
  };

  const handleInputChange = (evt) => {
    setInputs({...inputs, [evt.target.name]: evt.target.value});
  };

  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <h1>Arvostelut</h1>
        <>
          {user && (
            <>
              <h2>Lisää arvostelu</h2>

              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Otsikko</label>
                <br />
                <input
                  className="title"
                  name="title"
                  type="text"
                  id="title"
                  onChange={handleInputChange}
                />
                <br />

                <label htmlFor="description">Arvostelu</label>
                <br />
                <textarea
                  className="description"
                  name="description"
                  rows={5}
                  id="description"
                  onChange={handleInputChange}
                ></textarea>
                <br />
                <button type="submit">Lähetä</button>
              </form>
            </>
          )}
        </>
        {data.map((review) => (
          <div key={review.review_id}>
            <h2>{review.review_title}</h2>
            <p>Arvostelu kirjoitettu {new Date(review.created_at).toLocaleString('fi-FI')}</p>
            <p>{review.review_content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
