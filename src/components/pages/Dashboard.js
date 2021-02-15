import React, { useState, useEffect } from 'react';
import { SearchBar } from '../common/search/SearchBar';
import { Spinner } from '../common/spinner/Spinner';
import { List } from '../list/List';
import { Wrapper, Title, Container } from './styled';
import { ABTestService } from '../services/ABTestService';
import { NoResults } from '../common/noResults/NoResults';

export const Dashboard = () => {
  const [tests, setTests] = useState(null);
  const [visibleTests, setVisibleTests] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllTests = async () => {
      setIsLoading(true);
      try {
        const items = await ABTestService.getAll();
        setTests(items);
      } catch (e) {
        console.log(`Ошибка ${e}`);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTests();
  }, []);

  const filterItemsbyText = (items, searchText) => {
    return items.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchText)
      );
    });
  };

  useEffect(() => {
    const filterTests = () => {
      let filteredTests = tests ? filterItemsbyText(tests, searchText) : [];
      setVisibleTests(filteredTests);
    };
    filterTests();
  }, [searchText, tests]);

  const searchHandler = (value) => {
    setSearchText(value.toLowerCase());
  };

  const colNames = ['Name', 'Type', 'Status', 'Site'];

  return (
    <Wrapper>
      <Container>
        <Title>Dashboard</Title>
        <SearchBar
          search={searchHandler}
          itemsLength={visibleTests ? visibleTests.length : 0}
          placeholder='What test are you looking for?'
          counterText='tests'
        />
        {isLoading ? (
          <Spinner />
        ) : tests && tests.length > 0 ? (
          <List items={visibleTests} colNames={colNames} />
        ) : (
          <NoResults text='No data' />
        )}
      </Container>
    </Wrapper>
  );
};
