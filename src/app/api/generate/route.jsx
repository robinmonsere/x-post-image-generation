import { ImageResponse } from 'next/og';
export const runtime = 'edge'
import { Tweet } from 'react-tweet'

// App router includes @vercel/og.
// No need to install it.

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

    //let tweet = await fetchTweet('1827358911328129133');
    //let tweet = await fetchTweet('1827664316193009917');
    //let tweet = await fetchTweet('1821193568545067131');

    //short post
    //let tweet = await fetchTweet('1827753905800818999');

    // long post
    //let tweet = await fetchTweet('1827658235618144257');
    let tweet = await fetchTweet(tweetID);

    //console.log(tweet);
    let user = tweet.data.user;
    const hasBadge = user.highlighted_label !== undefined;
    const isSquare = user.profile_image_shape === 'Square';
    const profileImage = user.profile_image_url_https.replace('_normal', '_400x400');
    // console.log(profileImage);
    const checkMarkColor = user.verified_type === 'Business' ? '#e2b719' : '#1da1f2';
    // console.log(user.highlighted_label);
    const hasMedia = tweet.data.mediaDetails !== undefined;
    const isRepost = false;


    const baseHeight = 296;
    const baseImageHeight = 1600;
    const imageHeight = hasMedia ? tweet.data.mediaDetails[0].original_info.height : 0;
    const height = baseHeight + imageHeight;


    /*
    height calc

    always:
    48px padding top
    96px profile image
    24px padding top on text
    32px font text
    24px padding top on date
    24px font date text
    48px padding bottom
    =



    24px padding top on media

     */

    console.log(height);

    console.log(hasMedia);
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
                    border: '2px solid #fff',
                    borderRadius: '8px',
                    padding: '48px',
                    fontStyle: "italic !important",
                }}
            >
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: '96px',
                        width: '100%',
                    }}
                >
                    <img style={{
                        borderRadius: isSquare ? '5%' : '50%',
                        height: '96px',
                        width: '96px',
                        marginRight: '16px',
                    }} src={profileImage} alt=""/>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                marginTop: "0",
                                display: "flex",
                                flexDirection: "row",
                                height: "48px",
                            }}
                        >
                            <p
                                style={{
                                    marginTop: "0",
                                    marginRight: '4px',
                                    fontFamily: "Chirp-Heavy",
                                }}
                            >{user.name}</p>
                            {(user.is_blue_verified) ? (
                                <svg viewBox="0 0 48 48" width="48" height="48">
                                    <g>
                                        <path
                                            fill={checkMarkColor}
                                            d="M40.792 22c-.036-1.292-.43-2.55-1.14-3.632-.708-1.08-1.704-1.944-2.876-2.492.446-1.214.54-2.528.28-3.794-.262-1.268-.874-2.436-1.764-3.374-.94-.89-2.106-1.5-3.374-1.764-1.266-.26-2.58-.166-3.794.28-.546-1.174-1.408-2.172-2.49-2.88S23.293 3.24 22 3.208c-1.292.034-2.546.426-3.626 1.136-1.08.71-1.938 1.708-2.48 2.88-1.216-.446-2.534-.544-3.804-.28-1.27.26-2.44.872-3.38 1.764-.89.94-1.5 2.106-1.756 3.374-.26 1.266-.16 2.58.288 3.792-1.174.548-2.174 1.41-2.886 2.49-.712 1.082-1.11 2.34-1.148 3.63.04 1.294.436 2.552 1.15 3.634.712 1.08 1.712 1.944 2.886 2.49-.448 1.214-.546 2.528-.288 3.792.262 1.268.872 2.436 1.754 3.374.94.886 2.106 1.494 3.374 1.756 1.266.264 2.58.168 3.794-.272.548 1.172 1.41 2.17 2.49 2.878 1.082.708 2.34 1.104 3.632 1.136 1.292-.032 2.55-.426 3.634-1.134 1.08-.71 1.944-1.706 2.49-2.88 1.208.478 2.532.592 3.806.328 1.27-.264 2.44-.894 3.36-1.814.92-.92 1.552-2.088 1.816-3.364.464-1.172.15-2.598-.33-3.806 1.172-.548 2.172-1.41 2.878-2.492.708-1.082 1.104-2.34 1.138-3.63zM19.324 29.7l-6.858-6.856 2.586-2.604 4.144 4.144 8.8-9.588 2.694 2.492z"
                                        />
                                    </g>
                                </svg>
                            ) : null}
                            {(hasBadge) ? (
                                <img style={
                                    {
                                        height: '40px',
                                        width: '40px',
                                        borderRadius: '15%',
                                    }
                                } src={user.highlighted_label.badge.url} alt=""/>
                            ) : null}
                        </div>
                        <p
                            style={{
                                marginTop: "0",
                                color: "#71767b",
                            }}
                        >@{user.screen_name}</p>
                    </div>
                </div>
                <div style={{
                    marginTop: '24px',
                    display:"flex",
                }}>
                    <p style={{ whiteSpace: "pre-line", margin: 0, fontSize: "32"}}> {
                      tweet.data.text.slice(tweet.data.display_text_range[0], tweet.data.display_text_range[1])
                    }</p>
                   </div>
                {(hasMedia) ? (
                    <img style={{
                        marginTop: '24px',
                        borderRadius: '8px',
                        maxWidth: '100%',
                        maxHeight: imageHeight,
                       // objectFit: 'cover',
                    }} src={tweet.data.mediaDetails[0].media_url_https} alt=""/>
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
            width: 1040,
            height: height,
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
    console.log(url.toString());
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