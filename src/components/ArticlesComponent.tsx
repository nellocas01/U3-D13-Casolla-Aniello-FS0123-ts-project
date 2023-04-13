
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { IArticles } from "../interfaces/IArticles";

interface ArticleComponentProps {
    article: IArticles; 
  }
  
const ArticlesComponent = ({article}: ArticleComponentProps) =>{
    return(
        <Card className="mb-3 text-dark">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Button variant="info">
           N. {article.id}
          </Button>
        </Card.Body>
      </Card>
    )
};

export default ArticlesComponent;
  