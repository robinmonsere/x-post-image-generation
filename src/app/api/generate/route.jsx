import {ImageResponse} from 'next/og';
import {getImageBlurSvg} from "next/dist/shared/lib/image-blur-svg";
import {prefixes} from "next/dist/build/output/log";
import {Children, cloneElement} from "react";

// test posts
// quote img 1828170548670525803
export const runtime = 'edge'

const width = 1040;
/*
    width - 2x padding - big profile - margin
    1040 - 48 * 2 - 96 - 16 = 832
*/

const postWidth = 944;
/*
    width - 2x padding
 */

const parentPostWidth = 832;
/*
    width - 2x padding - profile - margin
 */
const baseImageHeight = 550;

const baseHeight = 144;
/*
  height calc

  always:
  24px padding top
  24px padding top on text --
  24px padding top on date
  24px font date text
  48px padding bottom
  = 144

  24px padding top on media

   */
let totalHeight = baseHeight;

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const tweetID = searchParams.get('id');


    const chirp_regular = await fetch(
        new URL('../../../../assets/Chirp-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const chirp_bold = await fetch(
        new URL('../../../../assets/Chirp-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const chirp_medium = await fetch(
        new URL('../../../../assets/Chirp-Medium.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const chirp_heavy = await fetch(
        new URL('../../../../assets/Chirp-Heavy.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    let tweet = await fetchTweet(tweetID);

    totalHeight = baseHeight;

    //console.log(tweet);
    let user = tweet.data.user;

    const hasMedia = tweet.data.mediaDetails !== undefined;
    const isQuote = tweet.data.quoted_tweet !== undefined;
    const isReply = tweet.data.parent !== undefined;
    const isRepost = searchParams.get('repost') === 'true';
    const hasCard = tweet.data.card !== undefined;

    const repostHeight = 32;
    const repostMarginHeight = 16;
    // adding height for repost text
    if (isRepost) {
        console.log("Adding height for repost icon and text + margin: ", repostHeight + repostMarginHeight);
        console.log(totalHeight);
        totalHeight = totalHeight + repostHeight + repostMarginHeight;
        console.log(totalHeight);
    }


    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '32px',
                    backgroundColor: '#15202b',
                    color: '#fff',
                    padding: '24px 48px 48px 48px',
                }}
            >
                {isReply ? (
                    getParentPost(tweet.data.parent)
                ) : null}
                {isRepost ? (
                    <div style={{
                        display: 'flex',
                        height: repostHeight,
                        marginBottom: repostMarginHeight,
                    }}>
                        <div
                            style={{
                                display: "flex",
                                width: '96px',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                            }}>
                            <svg style={{
                                height: '32px',
                                width: '32px',
                            }} viewBox="0 0 23 23">
                                <g>
                                    <path fill="#71767b"
                                          d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
                                </g>
                            </svg>
                        </div>
                        <p style={{
                            marginLeft: '16px',
                            fontFamily: "Chirp-medium",
                            color: '#71767b',
                            marginTop: '0',
                            fontSize: '24px',
                        }}>Elon Musk Reposted</p>
                    </div>
                ) : null}
                {getProfileSection(user, false, false)}
                {getTextSection(tweet.data.text, tweet.data.display_text_range, tweet.data.entities, postWidth, "24px 0 0 0")}
                {(hasMedia) ? (
                    getMediaBySize(tweet.data.mediaDetails, baseImageHeight, postWidth, 24)
                ) : null}
                {(hasCard) ? (
                    getCardSection(tweet.data.card, postWidth)
                ) : null}
                {isQuote ? (
                    getQuoteSection(tweet.data.quoted_tweet, postWidth)
                ) : null}
                <p
                    style={{
                        marginTop: '24px',
                        color: '#8899a6',
                        fontSize: '24px',
                    }}
                >{getFormattedDate(tweet.data.created_at)}</p>
            </div>
        ),
        {
            width: width,
            height: totalHeight,
            fonts: [
                {
                    data: chirp_regular,
                    name: 'Chirp-Regular',
                    style: 'normal',
                    weight: 400,
                },
                {
                    data: chirp_medium,
                    name: 'Chirp-Medium',
                    style: 'normal',
                    weight: 500,
                },
                {
                    data: chirp_bold,
                    name: 'Chirp-Bold',
                    style: 'bold',
                    weight: 700,
                },
                {
                    data: chirp_heavy,
                    name: 'Chirp-Heavy',
                    style: 'bolder',
                    weight: 800,
                },
            ],
        },
    );
}

function getCardSection(card, width) {
    const cardType = card.name;

    // There are multiple different card types
    // "summary": 1858641231984640118,
    // "player": 1858598397491474823,
    // "summary_large_image": 1858560300888240213,



    // these are all from the ads-api
    // IMAGE_APP, IMAGE_CAROUSEL_APP, IMAGE_CAROUSEL_WEBSITE,
    // IMAGE_MULTI_DEST_CAROUSEL_WEBSITE,
    // IMAGE_WEBSITE, MIXED_MEDIA_MULTI_DEST_CAROUSEL_WEBSITE,
    // MIXED_MEDIA_SINGLE_DEST_CAROUSEL_APP, VIDEO_APP,
    // MIXED_MEDIA_SINGLE_DEST_CAROUSEL_WEBSITE, VIDEO_CAROUSEL_APP,
    // VIDEO_CAROUSEL_WEBSITE, VIDEO_MULTI_DEST_CAROUSEL_WEBSITE, VIDEO_WEBSITE

    if (cardType === 'summary' || cardType === 'player' || cardType === 'summary_large_image') {
        const values = card.binding_values;
        let img_url;
        let domain;
        let description;
        let title;

        if (cardType === 'summary' || cardType === 'summary_large_image') {
            img_url = cardType === 'summary' ? values.thumbnail_image.image_value.url : values.thumbnail_image_original.image_value.url ;
            domain = values.domain.string_value;
            description = values.description.string_value;
            title = values.title.string_value;
        }

        if (cardType === 'player') {
            img_url = values.player_image.image_value.url;
            domain = values.domain.string_value;
            description = values.description.string_value;
            title = values.title.string_value;
        }

        if (cardType === 'summary_large_image') {
            let imageHeight = 450;
            totalHeight = totalHeight + imageHeight + 26; // 26px for height and padding link.

            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative", // Enables positioning relative to the div
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            height: imageHeight,
                            width: width,
                            overflow: "hidden",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "24px",
                            position: "relative", // Ensures the title can be absolutely positioned inside this div
                        }}
                    >
                        <img
                            style={{
                                height: imageHeight,
                                objectFit: "cover",
                                width: width,
                            }}
                            src={img_url}
                            alt=""
                        />
                        <p
                            style={{
                                position: "absolute",
                                bottom: "10px", // Position title near the bottom of the image
                                left: "10px", // Adds padding from the left
                                margin: 0,
                                color: "white",
                                fontSize: "1.2rem",
                                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
                                padding: "4px 8px",
                                borderRadius: "8px",
                            }}
                        >
                            {title}
                        </p>
                    </div>
                    <p style={{
                        margin: "8px 0 0 0",
                        textAlign: "center",
                        color: '#8899a6',
                        fontSize: "20px",
                        lineHeight: "18px"
                    }}>From {domain}</p>
                </div>
            );
        }

        // truncate description if it is over 160 characters long, add ...

        if (description.length > 160) {
            description = description.slice(0, 157) + "...";
        }

        const imageHeight = 168;
        const imageWidth = 168;

        totalHeight = totalHeight + 168 + 16;
        return (
            <div style={{
                marginTop: '16px',
                display: 'flex',
                borderRadius: '16',
                border: '1px solid #38444d',
                height: imageHeight + 2,
                width: width,
                overflow: 'hidden',
            }}>
                <img style={{
                    height: imageHeight,
                    width: imageWidth,
                    objectFit: 'cover',
                }} src={img_url} alt=""/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: imageHeight - 32,
                    width: width - imageWidth - 32,
                    margin: '16px',
                    overflow: 'hidden',
                    //backgroundColor: 'hotpink',
                }}>
                    <p style={{
                        color: '#828f9c',
                        fontSize: '20px',
                        margin: '0 0 8px 0',
                    }}>{domain}</p>
                    <p style={{
                        fontSize: '28px',
                        margin: '0',
                        paddingBottom: '15px',
                        whiteSpace: 'nowrap', // Prevents wrapping to a new line
                        overflow: 'hidden',
                    }}>{title}</p>
                    <p style={{
                        color: '#828f9c',
                        fontSize: '20px',
                        margin: '0',
                       // backgroundColor: 'hotpink',
                        overflow: 'hidden',

                    }}>{description}</p>
                </div>
            </div>
        );
    }
    return null;
}

function removeUrlsFromText(text, entities) {
    if (entities && entities.urls) {
        // Sort URLs by their starting index in reverse order to avoid messing up indices
        entities.urls.sort((a, b) => b.indices[0] - a.indices[0]);

        // Remove each URL from the text
        entities.urls.forEach(urlEntity => {
            const [start, end] = urlEntity.indices;
            text = text.slice(0, start) + text.slice(end);
        });
    }
    return text.trim();
}

function decodeHTMLEntities(text) {
    const entities = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">"
    };

    return text.replace(/&[a-zA-Z0-9#]+;/g, match => entities[match] || match);
}

function getTextSection(text, displayRange, entities, width, margin, maxHeight, addToHeight = true) {
    text = removeUrlsFromText(text, entities)
    text = decodeHTMLEntities(text)

    let textHeight = getSizeByText(text, width, 32, displayRange);

    // this will truncate the text if it is too high (NOT always when it's too long)
    // examples could be when there is a lot of new lines
    if (maxHeight !== undefined && textHeight > maxHeight) {
        console.log("Text too high, truncating")
        // - 10 otherwise it cuts of half of the last line
        textHeight = maxHeight - 10;
    }

    // quote does not add to height when image is already added
    if (addToHeight) {
        console.log("Adding height for text: ", textHeight);
        totalHeight = totalHeight + textHeight;
    }

    // text display range is only for internal links like the link to the reposted post
    // so it is definitely necessary to add the display range, but it's not enough.
    // links to articles or videos are still included in the text, so we need to remove them too

    /*
    // Initial text element
    let textElement = <p style={{
        backgroundColor: "hotpink",
    }}></p>;

    let lastIndex = displayRange[0];

    // Process user mentions and hashtags
    const allEntities = [...(entities.user_mentions || []), ...(entities.hashtags || [])]
        .sort((a, b) => a.indices[0] - b.indices[0]);

    allEntities.forEach((entity) => {
        const { indices } = entity;
        if (indices[0] >= displayRange[0] && indices[1] <= displayRange[1]) {
            // Add preceding text
            if (lastIndex < indices[0]) {
                textElement = cloneElement(
                    textElement,
                    {},
                    ...Children.toArray(textElement.props.children),
                    <pre key={`text-${lastIndex}`}>{text.slice(lastIndex, indices[0])}</pre>
                );
            }

            // Add styled mention or hashtag
            const entityText = text.slice(indices[0], indices[1]);
            textElement = cloneElement(
                textElement,
                {},
                ...Children.toArray(textElement.props.children),
                <pre key={`entity-${indices[0]}`} style={{ color: '#1d9bf0' }}>{entityText}</pre>
            );

            lastIndex = indices[1];
        }
    });



    // Add remaining text
    if (lastIndex < displayRange[1]) {
        textElement = cloneElement(
            textElement,
            {},
            ...Children.toArray(textElement.props.children),
            <pre key={`text-${lastIndex}`}>{text.slice(lastIndex, displayRange[1])}</pre>
        );
    }

    console.log(textElement)

    let texttest = <p>
        <pre>Interesting comments from </pre>
        <pre>@Gwynne_Shotwell</pre>
        <pre> on regulations, China, and going faster. \n\nhttps://t.co/JaRgqPb1Po</pre>
    </p>


     */

    /*
    console.log(text)
    // Split text into an array of spans while preserving words and newlines
    const textArray = text
        .slice(displayRange[0], displayRange[1])
        .split(/(\s+)/) // Split by spaces, newlines, or other whitespace
        //.filter(segment => segment.trim() || segment === "\n") // Keep non-empty segments and newlines
        .map((segment, index) => (
            <span key={index} style={{whiteSpace: "pre", backgroundColor: "hotpink"}}>
      {segment}
            </span>
        ));

    //console.log(textArray)
    let test = [
        <span key="0" style={{ whiteSpace: "pre" }}>Hello</span>,
        <span key="1" style={{ whiteSpace: "pre" }}> </span>,
        <span key="2" style={{ whiteSpace: "pre" }}>world!</span>,
        <span key="3" style={{ whiteSpace: "pre-line" }}>{"\n"}</span>,
        <br></br>,
        <span key="4" style={{ whiteSpace: "pre" }}>This</span>,
        <span key="5" style={{ whiteSpace: "pre" }}> </span>,
        <span key="6" style={{ whiteSpace: "pre" }}>is</span>,
        <span key="7" style={{ whiteSpace: "pre" }}> </span>,
        <span key="8" style={{ whiteSpace: "pre" }}>a</span>,
        <span key="9" style={{ whiteSpace: "pre" }}> </span>,
        <span key="10" style={{ whiteSpace: "pre" }}>test.</span>,
        <span key="11" style={{ whiteSpace: "pre" }}>\n\n</span>,
        <span key="12" style={{ whiteSpace: "pre" }}>Newline</span>,
        <span key="13" style={{ whiteSpace: "pre" }}> </span>,
        <span key="14" style={{ whiteSpace: "pre" }}>here.</span>
    ];
    console.log(test)
    return (
        <div
            style={{
                margin: margin ?? "0",
                display: "flex",
                height: textHeight,
                width: width,
                textOverflow: "ellipsis",
                overflow: "hidden",
            }}
        >
            <p
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    whiteSpace: "pre-line",
                    margin: 0,
                    fontSize: "32",
                    wordWrap: "break-word",
                    textOverflow: "ellipsis",
                }}
            >
                {test}
            </p>
        </div>
    );

     */

    return (
        <div style={{
            margin: margin ?? '0',
            display: "flex",
            height: textHeight,
            width: width,
            textOverflow: "ellipsis",
           // backgroundColor: "#1f69b2",
            overflow: "hidden",
        }}>
            <p style={{
                whiteSpace: "pre-line",
                margin: 0,
                fontSize: "32",
                //textWrap: "wrap",
                //width: width,
                wordWrap: "break-word",
                // known bug with 1827400923154366799 on @NASA_astronauts
                textOverflow: "ellipsis"
            }}>
                {text.slice(displayRange[0], displayRange[1])}
            </p>
        </div>
    )
}

/*
<p style={{
    whiteSpace: "pre-line",
    margin: 0,
    fontSize: "32",
    textWrap: "wrap",
    width: width,
    wordWrap: "break-word",
    // known bug with 1827400923154366799 on @NASA_astronauts
    textOverflow: "ellipsis"
}}>
    {text.slice(displayRange[0], displayRange[1])}

</p>
 */


/// [isDense] will shrink the width and height of the profile image
/// [isOneLine] will make the profile section one line
function getProfileSection(user, isDense, isOneLine) {
    //console.log(user)
    const hasBadge = user.highlighted_label !== undefined;

    // make sure to override the isSquare when shape is Circle, for some government accounts like @joeBiden
    const isSquare = user.profile_image_shape === "Circle"
        ? false
        : user.profile_image_shape === "Square" || user.verified_type === "Government" || user.verified_type === "Business";
    const profileImage = user.profile_image_url_https.replace('_normal', '_400x400');
    const isVerified = user.is_blue_verified || user.verified_type === 'Business' || user.is_business_verified;
    const verifiedType = user.verified_type ?? 'Verified';

    const verifiedIcons = {
        Government: (
            <svg viewBox="0 0 22 22" height="32">
                <g>
                    <path clipRule="evenodd" fill="#829AAB" fillRule="evenodd"
                          d="M12.096 1.673c-.593-.635-1.599-.635-2.192 0L8.452 3.227c-.296.316-.714.49-1.147.474L5.18 3.63c-.867-.03-1.579.682-1.55 1.55l.072 2.125c.015.433-.158.851-.474 1.147L1.673 9.904c-.635.593-.635 1.599 0 2.192l1.554 1.452c.316.296.49.714.474 1.147L3.63 16.82c-.03.867.682 1.579 1.55 1.55l2.125-.072c.433-.015.851.158 1.147.474l1.452 1.555c.593.634 1.599.634 2.192 0l1.452-1.555c.296-.316.714-.49 1.147-.474l2.126.071c.867.03 1.579-.682 1.55-1.55l-.072-2.125c-.015-.433.158-.851.474-1.147l1.555-1.452c.634-.593.634-1.599 0-2.192l-1.555-1.452c-.316-.296-.49-.714-.474-1.147l.071-2.126c.03-.867-.682-1.579-1.55-1.55l-2.125.072c-.433.015-.851-.158-1.147-.474l-1.452-1.554zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"/>
                </g>
            </svg>
        ),
        Business: (
            <svg viewBox="0 0 22 22" height="32">
                <g>
                    <path fill="url(#paint0_linear_8728_433881)" fillRule="evenodd" clipRule="evenodd"
                          d="M13.596 3.011L11 .5 8.404 3.011l-3.576-.506-.624 3.558-3.19 1.692L2.6 11l-1.586 3.245 3.19 1.692.624 3.558 3.576-.506L11 21.5l2.596-2.511 3.576.506.624-3.558 3.19-1.692L19.4 11l1.586-3.245-3.19-1.692-.624-3.558-3.576.506zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"/>
                    <path fill="url(#paint1_linear_8728_433881)" fillRule="evenodd" clipRule="evenodd"
                          d="M13.348 3.772L11 1.5 8.651 3.772l-3.235-.458-.565 3.219-2.886 1.531L3.4 11l-1.435 2.936 2.886 1.531.565 3.219 3.235-.458L11 20.5l2.348-2.272 3.236.458.564-3.219 2.887-1.531L18.6 11l1.435-2.936-2.887-1.531-.564-3.219-3.236.458zM6 11.39l3.74 3.74 6.2-6.77L14.47 7l-4.8 5.23-2.26-2.26L6 11.39z"/>
                    <path fill="#D18800" fillRule="evenodd" clipRule="evenodd"
                          d="M6 11.39l3.74 3.74 6.197-6.767h.003V9.76l-6.2 6.77L6 12.79v-1.4zm0 0z"/>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8728_433881" x1="4" x2="19.5"
                                    y1="1.5" y2="22">
                        <stop stopColor="#F4E72A" id="stop8"/>
                        <stop offset=".539" stopColor="#CD8105" id="stop10"/>
                        <stop offset=".68" stopColor="#CB7B00" id="stop12"/>
                        <stop offset="1" stopColor="#F4EC26" id="stop14"/>
                        <stop offset="1" stopColor="#F4E72A" id="stop16"/>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_8728_433881" x1="5" x2="17.5"
                                    y1="2.5" y2="19.5">
                        <stop stopColor="#F9E87F" id="stop19"/>
                        <stop offset=".406" stopColor="#E2B719" id="stop21"/>
                        <stop offset=".989" stopColor="#E2B719" id="stop23"/>
                    </linearGradient>
                </g>
            </svg>
        ),
        Verified: (
            <svg viewBox="2 2 18 18" height="32">
                <g>
                    <path fill='#1d9bf0'
                          d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                    </path>
                </g>
            </svg>
        ),
    };

    const VerifiedIconComponent =
        verifiedIcons[verifiedType] || null;

    const height = isDense ? 48 : 96;
    const profilePicWidth = isDense ? 48 : 96;

    //console.log("Adding height for profile picture: ", height)
    totalHeight = totalHeight + height;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                height: height,
                width: '100%',
            }}
        >
            <img style={{
                borderRadius: isSquare ? '5%' : '50%',
                height: height,
                width: profilePicWidth,
                marginRight: isOneLine ? '10px' : '16px',
            }} src={profileImage} alt=""/>
            <div
                style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: isOneLine ? 'center' : 'flex-start',
                    flexDirection: isOneLine ? "row" : "column",
                }}
            >
                <div
                    style={{
                        //backgroundColor: "#1f69b2",
                        marginTop: "0",
                        marginBottom: '0',
                        display: "flex",
                        flexDirection: "row",
                        height: "32px",
                        alignItems: 'center',
                    }}
                >
                    <p
                        style={{
                            marginTop: "0",
                            marginBottom: '0',
                            marginRight: '4px',
                            fontFamily: "Chirp-Heavy",
                        }}
                    >{user.name}</p>
                    {(isVerified) ? (
                        VerifiedIconComponent
                    ) : null}
                    {(hasBadge) ? (
                        <img style={
                            {
                                height: '32px',
                                width: '32px',
                                borderRadius: '15%',
                                marginLeft: '8px',
                            }
                        } src={user.highlighted_label.badge.url} alt=""/>
                    ) : null}
                </div>
                <div style={{
                    height: '8px',
                }}></div>
                <div style={{
                    //backgroundColor: "#205f9d",
                    marginTop: "0",
                    marginBottom: '0',
                    display: "flex",
                    flexDirection: "row",
                    height: "32px",
                    alignItems: 'center',
                }}>
                    <p
                        style={{
                            marginTop: "0",
                            marginBottom: '0',
                            color: "#71767b",
                            marginLeft: isOneLine ? '8px' : '0',
                        }}
                    >@{user.screen_name}</p>
                </div>

            </div>
        </div>
    )
}

function getParentPost(parent) {
    const hasMedia = parent.mediaDetails !== undefined;
    const isQuote = parent.quoted_tweet !== undefined;
    const hasCard = parent.card !== undefined;
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            {getProfileSection(parent.user, false, false)}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div style={{
                    marginRight: '16px',
                    width: '96px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        margin: '0',
                        width: '1px',
                        height: '100%',
                        backgroundColor: '#8899a6',
                    }}></div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '16px',
                    width: parentPostWidth,
                }}>
                    {getTextSection(parent.text, parent.display_text_range, parent.entities, parentPostWidth)}
                    {(hasMedia) ? (
                        getMediaBySize(parent.mediaDetails, baseImageHeight, parentPostWidth, 24)
                    ) : null}
                    {(hasCard) ? (
                        getCardSection(parent.card, parentPostWidth)
                    ) : null}
                    {(isQuote) ? (
                        getQuoteSection(parent.quoted_tweet, parentPostWidth, false)
                    ) : null}
                </div>
            </div>
        </div>
    )
}

function getQuoteSection(quote, width, isDense = true, marginTop) {
    // padding + margin top
    //console.log("Adding height for quote: ", "40")
    totalHeight = totalHeight + 56;
    const sectionSize = 168;
    /*
    height calc

    padding top = 16px
    profile section = 48px
    profile bottom padding = 8px

    section 168px --> max height

    padding bottom = 16px
    total: 256px
    */

    const hasMedia = quote.mediaDetails !== undefined;

    const textWidth = hasMedia ? width - sectionSize - 48 : width - 32;

    return (
        <div style={{
            display: 'flex',
            borderRadius: '16px',
            border: '2px solid #38444d',
            padding: '16px',
            flexDirection: 'column',
            maxHeight: '256px',
            width: width,
            marginTop: '24px',
        }}>
            {getProfileSection(quote.user, true, true)}
            <div style={{
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'row',
            }}>
                {(hasMedia) ? (
                    <>
                        {getMediaBySize(quote.mediaDetails, sectionSize, sectionSize)}
                        <div style={{width: '16px'}}></div>
                    </>
                ) : null}
                {getTextSection(quote.text, quote.display_text_range, quote.entities, textWidth, 0, sectionSize, !hasMedia)}
            </div>
        </div>
    );
}

function getMediaBySize(mediaDetails, height, width, marginTop = 0) {
    totalHeight = totalHeight + height + marginTop;
    //console.log("Adding height for media: ", height + marginTop);

    return (
        <div style={{
            marginTop: marginTop,
            display: 'flex',
            flexDirection: 'row',
            width: width,
            height: height,
            borderRadius: '24px',
            gap: '2px',
            overflow: 'hidden',
        }}>
            {(mediaDetails.length === 4) ? (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img
                            src={mediaDetails[0].media_url_https}
                            alt="media-1"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                        <div style={{height: '2px'}}></div>
                        <img
                            src={mediaDetails[1].media_url_https}
                            alt="media-1"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <div style={{width: '2px'}}></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img
                            src={mediaDetails[2].media_url_https}
                            alt="media-1"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                        <div style={{height: '2px'}}></div>
                        <img
                            src={mediaDetails[3].media_url_https}
                            alt="media-1"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </>
            ) : null
            }
            {(mediaDetails.length === 3) ? (
                <>
                    <img
                        src={mediaDetails[0].media_url_https}
                        alt="media-0"
                        style={{
                            width: width / 2,
                            height: height,
                            objectFit: 'cover',
                        }}
                    />
                    <div style={{width: '2px'}}></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img
                            src={mediaDetails[1].media_url_https}
                            alt="media-1"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                        <div style={{height: '2px'}}></div>
                        <img
                            src={mediaDetails[2].media_url_https}
                            alt="media-2"
                            style={{
                                width: width / 2,
                                height: height / 2,
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </>
            ) : null}
            {(mediaDetails.length === 2) ? (
                <>
                    <img
                        src={mediaDetails[0].media_url_https}
                        alt="media-0"
                        style={{
                            width: width / 2,
                            height: height,
                            objectFit: 'cover',
                        }}
                    />
                    <div style={{width: '2px'}}></div>
                    <img
                        src={mediaDetails[1].media_url_https}
                        alt="media-1"
                        style={{
                            width: width / 2,
                            height: height,
                            objectFit: 'cover',
                        }}
                    />
                </>
            ) : null}
            {(mediaDetails.length === 1) ? (
                <img
                    src={mediaDetails[0].media_url_https}
                    alt="media-0"
                    style={{
                        width: width,
                        height: height,
                        objectFit: 'cover',
                    }}
                />
            ) : null}
        </div>
    )

}

function getFormattedDate(timestamp) {
    // Create a Date object
    const date = new Date(timestamp);

// Extract the components
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

// Format the date part
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);

// Combine everything
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const formattedString = `${formattedTime} · ${formattedDate}`;

    return formattedString;
}

function getSizeByText(text, width, fontSize, displayRange) {
    text = text.slice(displayRange[0], displayRange[1]);
    //console.log("Calculating height for text: ", text);

    if (text === '') {
        console.log("Text is empty")
        return 0;
    }
    // Assuming each character is 0.6 * fontSize in width on average
    const averageCharWidth = fontSize * 0.5;

    // Line height is roughly the font size (you can adjust it slightly based on your needs)
    const lineHeight = fontSize * 1.2; // 1.2 is a common line-height multiplier

    // Split the text by newline characters to handle manual line breaks
    const lines = text.split('\n');
    let totalLines = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check if the current line is empty (i.e., due to \n\n)
        if (line === '') {
            totalLines += 1; // Add an empty line
            continue;
        }

        // Calculate the number of characters that fit in one line
        const maxCharsPerLine = Math.floor(width / averageCharWidth);

        // Calculate the number of lines needed for this text
        const lineCount = Math.ceil(line.length / maxCharsPerLine);
        totalLines += lineCount;
    }

    // Total height is the number of lines times the line height
    const totalHeight = totalLines * lineHeight;

    return Math.round(totalHeight);
}

function getToken(id) {
    return (Number(id) / 1e15 * Math.PI).toString(6 ** 2).replace(/(0+|\.)/g, '');
}

const SYNDICATION_URL = 'https://cdn.syndication.twimg.com';

const TWEET_ID = /^[0-9]+$/;

async function fetchTweet(id, fetchOptions) {
    var _res_headers_get;
    if (id.length > 40 || !TWEET_ID.test(id)) {
        throw new Error(`Invalid tweet id: ${id}`);
    }
    const url = new URL(`${SYNDICATION_URL}/tweet-result`);
    url.searchParams.set('id', id);
    url.searchParams.set('lang', 'en');
    url.searchParams.set('features', [
        'tfw_timeline_list:',
        'tfw_follower_count_sunset:true',
        'tfw_tweet_edit_backend:on',
        'tfw_refsrc_session:on',
        'tfw_fosnr_soft_interventions_enabled:on',
        'tfw_show_birdwatch_pivots_enabled:on',
        'tfw_show_business_verified_badge:on',
        'tfw_duplicate_scribes_to_settings:on',
        'tfw_use_profile_image_shape_enabled:on',
        'tfw_show_blue_verified_badge:on',
        'tfw_legacy_timeline_sunset:true',
        'tfw_show_gov_verified_badge:on',
        'tfw_show_business_affiliate_badge:on',
        'tfw_tweet_edit_frontend:on'
    ].join(';'));
    url.searchParams.set('token', getToken(id));
    const res = await fetch(url.toString(), fetchOptions);
    const isJson = (_res_headers_get = res.headers.get('content-type')) == null ? void 0 : _res_headers_get.includes('application/json');
    const data = isJson ? await res.json() : undefined;
    if (res.ok) {
        if ((data == null ? void 0 : data.__typename) === 'TweetTombstone') {
            return {
                tombstone: true
            };
        }
        return {
            data
        };
    }
    if (res.status === 404) {
        return {
            notFound: true
        };
    }
    throw new TwitterApiError({
        message: typeof data.error === 'string' ? data.error : `Failed to fetch tweet at "${url}" with "${res.status}".`,
        status: res.status,
        data
    });
}

class TwitterApiError extends Error {
    constructor({message, status, data}) {
        super(message);
        this.name = 'TwitterApiError';
        this.status = status;
        this.data = data;
    }
}