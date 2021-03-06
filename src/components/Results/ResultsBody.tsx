import styled from 'styled-components';
import { Results } from '../../Types/resultsTypes';
import Spinner from '../../components/Spinner';
import FilmCard from '../../components/Card/FilmCard';
import Button from '../../components/Button';
import { useRouter } from 'next/router';

const ResultsBody = ({
  size,
  totalPages,
  moreResults,
  text,
  data,
  type,
  status,
  title,
}: Results) => {
  const router = useRouter();

  const buttonText = () => {
    return status === 'pending' ? <Spinner /> : 'Load more';
  };

  const clickHandler = (id) => {
    if (type === 'film') router.push(`/film?id=${id}`);
  };

  const body = () => {
    if (data.length > 0) {
      return (
        <>
          <Title>{title}</Title>
          {data.map((element) => (
            <FilmCard
              text={text}
              key={element.id}
              clickHandler={() => clickHandler(element.id)}
              id={element.id}
              title={element.original_title}
              size={size}
              image={
                element.poster_path === null
                  ? null
                  : `https://image.tmdb.org/t/p/w200/${element.poster_path}`
              }
            />
          ))}
        </>
      );
    }
  };

  return (
    <Container>
      {data.length > 0 && <ResultContainer>{body()}</ResultContainer>}
      {status === 'pending' && (
        <SpinnerContainer loadMoreData={data.length > 0 ? true : false}>
          <Spinner />
        </SpinnerContainer>
      )}
      {totalPages > 1 && status === 'fulfilled' && (
        <ButtonContainer>
          <Button text='Load more' clickHandler={() => moreResults()} />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default ResultsBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.mediumText};
  font: 2rem Roboto, sans-serif;
  text-align: center;
  display: inline-block;
  width: 100vw;
  margin: 30px 0;
`;

const SpinnerContainer = styled.div<{ loadMoreData: boolean }>`
  width: 100%;
  height: ${({ loadMoreData }) =>
    loadMoreData === true ? '150px' : 'calc(100vh - 64px)'};
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
