import { useEffect, useState } from "react";
import { IArticles } from "../interfaces/IArticles";
import { Container, Row, Col } from "react-bootstrap";
import ArticlesComponent from "./ArticlesComponent";

const Home = () =>{
    const URL = "https://api.spaceflightnewsapi.net/v4/articles";
    const [articles, setArticles] = useState<IArticles[]>([]);

    const fetchArticles = async () => {
        try {
            const resp = await fetch(URL);
            if(resp.ok){
                const articlesFromApi = await resp.json();
                setArticles(articlesFromApi);
            }
        } catch (error) {
            console.log(error);
            
        }
    };
        
    useEffect(() => {
        fetchArticles();
      }, []);
    
    return(
        <Container>
        <Row md={3} className="justify-content-center">
          {articles.map(article => (
            <Col key={article.id}>
              <ArticlesComponent article={article} />
            </Col>
          ))}
        </Row>
      </Container>
    )
};

export default Home;