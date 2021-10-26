import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import listData from './data';
import './List.scss';
import ListCard from './ListCard/ListCard';
let result = [];
var totalItemShow = 6;
let calculateCount;
const completedItems = 'Yay! You have seen it all';
const loader =
    <div className="loader">
        <img
            src="https://ctrlq.org/assets/img/ctrlq.org.google.images.wait.svg"
            alt="loading" />
        <h5> Loading ...</h5>
    </div>;

function List() {

    const [item, setItem] = useState(result);
    const [more, setMore] = useState(false);

    useEffect(() => {
        loadList();
    }, []);

    useEffect(() => {
        loadDataForDifferentResolution();
    }, [item]);


    const loadList = (intialItem = 0) => {
        calculateCount = result.length + totalItemShow;
        const nextItems = listData.slice(intialItem, calculateCount);
        if (nextItems.length) {
            result = result.concat(nextItems);
            setMore(true);
            setItem(result);
        } else {
            setMore(false);
        }
    }


    const loadDataForDifferentResolution = () => {
        if (window.outerHeight < document.body.clientHeight) {
            fetchMoreData();
        }
    }


    const fetchMoreData = () => {
        setTimeout(() => loadList(calculateCount), 3000);
    }


    return (
        <>
            <Container>
                <InfiniteScroll
                    dataLength={item.length}
                    next={fetchMoreData}
                    hasMore={more}
                    loader={loader}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>{completedItems}</b>
                        </p>
                    }
                >
                    <Row>

                        {
                            item.map((list) => (
                                <Col md="6" lg="4" className="custom_card card_padder" key={list.id}>
                                    <ListCard
                                        list={list}
                                    />
                                </Col>
                            ))
                        }
                    </Row>

                </InfiniteScroll>
            </Container>
        </>
    )
}

export default List
