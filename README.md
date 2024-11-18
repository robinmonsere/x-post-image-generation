# Vercel OG 𝕏 Image Generator

This project uses [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to dynamically generate images from posts on 𝕏. Given a post's ID, this tool creates an image of that post, the parent post or quote post.

## Features

### User Profiles
- **Profile Picture Styles**:
    - Supports both square and round profile pictures.
    - Displays inline names for quote posts.
- **Verification Badges**:
    - Blue checkmark for verified users.
    - Gold checkmark for business accounts.
    - Grey checkmark for government accounts.
- **Affiliate and Automated Badges**:
    - Shows the affiliate badge for affiliate accounts.
    - Displays the automated badge for accounts with automated posts.

### Post Content
- **Single Post**:
    - Generates images for single posts containing text and media.
- **Replies**:
    - Handles replies with text and media to a post with text and media.
- **Quotes**:
    - Manages quotes with text and media to a post with text and media.
- **Replies to Quotes**:
    - Supports replies with text and media to a quote with text and media.

### Limitations
- **Inline Quote Posts**:
    - Quote posts are always displayed inline with smaller media sizes.
- **Unicode Support**:
    - Does not currently support certain unicode characters, such as █ and ░.
- **Media Cropping**:
    - Single media items are cropped to fit within the generated image.

### Todo List
- [x] **Correct business and government badges**:
    - Add support for business and government badges.
- [ ] **Links, Hashtags, and Mentions**:
    - Add support for links, hashtags, and mentions.
- [ ] **Responsive Media Handling**:
    - **Problem**: Media that is smaller than the width of the image will scale up, but how can the height be calculated to maintain aspect ratio?
- [ ] **Unicode Support**:
    - Add support for additional unicode characters. 
    - █ ░ and many more
- [ ] **Post Information**:
    - Show likes, quotes, replies and impressions (optional).
- [ ] **Long names**:
    - Handle long names by truncating them and adding ellipsis.
    - example issue: '1828170548670525803'

## Usage

This project is designed to generate images by taking the ID of a post on X and rendering it as a picture. This can be useful for sharing or archiving content in a visually appealing format.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/robinmonsere/x-post-image-generation.git
   cd x-post-image-generation
   ```

2. **Install the dependencies**:
   ```bash
    npm install
    ```

3. **Run the development server**:
   ```bash
    npm run dev
    ```
   
4. **Use the API**:
    ```bash
    http://localhost:3000/api/generate?id={post_id}
    ```
   
## Contributing
Contributions are welcome! If you have suggestions for new features, feel free to open an issue or submit a pull request.


## Author
 - [Robin](https://github.com/robinmonsere)