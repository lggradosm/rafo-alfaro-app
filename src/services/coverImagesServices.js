export default async function coverImagesService(){
    const url = "http://localhost:5050/api/v1/web_page/cover_images"
    const response = await fetch(url)
    return response.json();
}