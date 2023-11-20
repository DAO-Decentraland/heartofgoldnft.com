import parse from 'html-react-parser';

export default function htmlContent(content: string){
	return content ? parse(content) : null
}
