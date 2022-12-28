import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../../../components/Button';
import TopBar from '../../../components/TopBar';
import styled from 'styled-components';

const Cont = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        height: calc(100vh - 55px);
    }
`

export default function NoFollowerFollowing(props) {
    const navigate = useNavigate();
    
    return (
        <>
            <TopBar type="AO"/>
            <Cont>
                {props.page === "follower" ? <>팔로우하는 유저가 없습니다</>: <>팔로잉하는 유저가 없습니다.</>}
                <Button className='large' onClick={()=> navigate("../../../search")}>탐색하기</Button>
            </Cont>
        </>
    )
}
