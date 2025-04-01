import React from 'react';
import { useParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

function ReadPage(props) {

    const {tno} = useParams();

    return (
        <div className={'w-full bg-white mt-6 font-extrabold'}>

            <div className='text-2xl '>
                Todo Read Page {tno}
            </div>

            <ReadComponent tno={tno}/>

        </div>
    );
}

export default ReadPage;