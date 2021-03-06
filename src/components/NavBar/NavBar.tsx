import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import UserAvatar from './UserAvatar';
import { auth, provider } from '../../../firebase';

import {
  selectUserEmail,
  selectUserImage,
  selectUserName,
  setActiveUser,
  setUserLogoutState,
  fetchUserList,
} from '../../reducers/userSlice';
import { fetchGenre, selectGenre } from '../../reducers/genreSlice';

const NavBar = ({
  closeMenu,
  menuState,
}: {
  closeMenu: Function;
  menuState: boolean;
}) => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
  const userImage = useSelector(selectUserImage);
  const genre = useSelector(selectGenre);

  const handleSignIn = () => {
    auth.signInWithPopup(provider);
  };

  const handleSignOut = () => {
    auth.signOut().then(() => dispatch(setUserLogoutState()));
  };

  useEffect(() => {
    if (userName === null) {
      auth.onAuthStateChanged((user) => {
        if (user !== null && userEmail === null) {
          dispatch(fetchUserList(user.uid));
          dispatch(
            setActiveUser({
              userName: user.displayName,
              userEmail: user.email,
              userId: user.uid,
              userImage: user.photoURL,
            })
          );
        }
      });
    }
  }, []);

  useEffect(() => {
    if (genre.length === 0) {
      dispatch(fetchGenre());
    }
  }, [genre]);

  const signedInBody = () => {
    return (
      <>
        <AvatarContainer onClick={() => router.push('/userProfile')}>
          <UserAvatar image={userImage} size='small' />
        </AvatarContainer>
      </>
    );
  };

  const notSignedInBody = () => {
    return <></>;
  };

  return (
    <>
      <NavBarContainer>
        <HamburgerButton onClick={() => closeMenu()} isOpen={menuState}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </HamburgerButton>

        <h1 onClick={() => router.push('/')}>Movio</h1>
        {userName !== null ? signedInBody() : notSignedInBody()}
        <Menu closeMenu={() => setOpen(false)} isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
};

export default NavBar;

const NavBarContainer = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100vw;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.secondary};
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.fourDp};

  h1 {
    text-transform: uppercase;
    font: 40px Oswald, sans-serif;
    cursor: pointer;
  }
`;

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  height: 100%;
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 6px 20px;
    transition: 0.4s;
    border-radius: 10px;
    transform-origin: 1.5px;
  }

  .bar1 {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
  }

  .bar2 {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  .bar3 {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
  }
`;

const AvatarContainer = styled.div`
  margin-left: auto;
  margin-right: 15px;
`;
