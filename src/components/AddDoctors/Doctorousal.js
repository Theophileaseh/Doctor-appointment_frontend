import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delayShow, updateIndexes } from '../../redux/doctorsListSlice';
import { shiftRow, unshiftRow } from './indexes';
import style from './HomePage.module.css';

function Doctoroual() {
  const dispatch = useDispatch();

  const {
    doctors,
    indexes,
    delay,
  } = useSelector((state) => state.doctorslist);

  const transition = () => {
    dispatch(delayShow(true));
    setTimeout(() => dispatch(delayShow(false)), 200);
  };

  useEffect(() => {
    transition();
  }, []);

  const mapdoctors = indexes.map(
    (index) => {
      if (doctors[index] !== undefined) {
        return (
          <DoctorCard
            key={doctors[index].id}
            id={doctors[index].id}
            name={doctors[index].name}
            model={doctors[index].model}
            brand={doctors[index].brand}
            imageUrl={doctors[index].image_url}
          />
        );
      }
      return '';
    },
  );

  const nextHandle = () => {
    transition();
    const newIndexes = shiftRow(indexes, doctors);
    dispatch(updateIndexes(newIndexes));
  };

  const prevHandle = () => {
    transition();
    const newIndexes = unshiftRow(indexes, doctors);
    dispatch(updateIndexes(newIndexes));
  };

  return (
    <div className={style.carousel}>
      <button type="button" className={style.prevBtn} onClick={prevHandle}>
        <PrevSVG style={style} />
      </button>
      <div className={
        delay
          ? style.cardsContainer
          : `${style.cardsContainer} ${style.cardsContainerShow}`
        }
      >
        {doctors.length >= 1 ? mapdoctors : ''}
      </div>
      <button type="button" className={style.nextBtn} onClick={nextHandle}>
        <NextSVG style={style} />
      </button>
    </div>
  );
}

export default Doctoroual;
