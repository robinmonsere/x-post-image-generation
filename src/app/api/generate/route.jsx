import { ImageResponse } from 'next/og';

export const runtime = 'edge'
import { createCanvas } from "canvas";

// App router includes @vercel/og.
// No need to install it.

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

const baseHeight = 168;
/*
  height calc

  always:
  48px padding top
  24px padding top on text
  24px padding top on date
  24px font date text
  48px padding bottom
  = 168

  24px padding top on media

   */
let totalHeight = baseHeight;

export async function GET(request) {
    const { searchParams } = new URL(request.url);
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
    // console.log(user.highlighted_label);
    const hasMedia = tweet.data.mediaDetails !== undefined;
    const isRepost = false;
    const isQuote = tweet.data.quoted_tweet !== undefined;
    const isReply = tweet.data.parent !== undefined;


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
                    padding: '48px',
                }}
            >
                {isReply ? (
                    getParentPost(tweet.data.parent)
                ) : null}
                {isRepost ? (
                    <div style={{
                        display: 'flex',
                        height: '32px',
                        marginBottom: '16px',
                    }}>
                        <div
                        style={{
                            display:"flex",
                            width: '96px',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}>
                            <svg style={{
                                height: '32px',
                                width: '32px',
                            }} viewBox="0 0 23 23" ><g><path fill="#71767b" d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path></g></svg>
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
                {getTextSection(tweet.data.text, tweet.data.display_text_range, postWidth, "24px 0 0 0")}
                {(hasMedia) ? (
                        <div style={{
                            display: 'flex',
                            marginTop: '24px',
                        }}>
                            {getMediaBySize(tweet.data.mediaDetails, baseImageHeight, postWidth)}
                        </div>
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

function getTextSection(text, displayRange, width, margin) {
    const textHeight = getSizeByText(text, width, 32);

    console.log("Adding height for text: ", textHeight);
    totalHeight = totalHeight + textHeight;
    return (
        <div style={{
            margin: margin ?? '0',
            display:"flex",
            height: textHeight,
            width: width,
        }}>
            <p style={{
                whiteSpace: "pre-line",
                margin: 0,
                fontSize: "32",
                textWrap: "wrap",
                width: width,
                wordWrap: "break-word",
                // known bug with 1827400923154366799 on @NASA_astronauts
                // wordBreak: "break-all",
            }}>
                {text.slice(displayRange[0], displayRange[1])}
            </p>
        </div>
    )
}

function getProfileSection(user, isDense, isOneLine) {
    const hasBadge = user.highlighted_label !== undefined;
    const isSquare = user.profile_image_shape === 'Square';
    const profileImage = user.profile_image_url_https.replace('_normal', '_400x400');
    const checkMarkColor = user.verified_type === 'Business' ? '#e2b719' : '#1da1f2';

    const height = isDense ? 48 : 96;
    const width = isDense ? 48 : 96;

    console.log("Adding height for profile picture: ", height)
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
                width: width,
                marginRight: '16px',
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
                    {(user.is_blue_verified) ? (
                        // to change size of svg, just change the height
                        <svg viewBox="2 2 18 18" height="32">
                            <g>
                                <path  fill={checkMarkColor} d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                </path>

                            </g>
                        </svg>
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
                    {getTextSection(parent.text, parent.display_text_range, parentPostWidth)}
                    {(hasMedia) ? (
                        getMediaBySize(parent.mediaDetails, baseImageHeight, parentPostWidth)
                    ) : null}
                    {(isQuote) ? (
                        getQuoteSection(parent.quoted_tweet, parentPostWidth)
                    ) : null}
                </div>
            </div>
        </div>
    )
}

function getQuoteSection(quote, width) {
    // padding + margin top
    console.log("Adding height for quote: ", "40")
    totalHeight = totalHeight + 40;
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

    return (
        <div style={{
            display: 'flex',
            borderRadius: '16px',
            border: '2px solid #38444d',
            padding: '16px',
            flexDirection: 'column',
            maxHeight:'256px',
            width: width,
            marginTop: '8px',
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
                        <div style={{width:'16px'}}></div>
                    </>
                ) : null}
                {getTextSection(quote.text, quote.display_text_range, width)}
            </div>
        </div>
    );
}

function getMediaBySize(mediaDetails, height, width) {
    totalHeight = totalHeight + height;
    console.log("Adding height for media: ", height);

    return (
        <div style={{
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
                        <div style={{height:'2px'}}></div>
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
                    <div style={{width:'2px'}}></div>
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
                        <div style={{height:'2px'}}></div>
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
                    <div style={{width:'2px'}}></div>
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
                        <div style={{height:'2px'}}></div>
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
                    <div style={{width:'2px'}}></div>
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
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

// Combine everything
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const formattedString = `${formattedTime} · ${formattedDate}`;

    return formattedString;
}

function getSizeByText(text, width, fontSize) {
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
    constructor({ message, status, data }){
        super(message);
        this.name = 'TwitterApiError';
        this.status = status;
        this.data = data;
    }
}