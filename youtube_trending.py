#!/usr/bin/env python3
"""
YouTube Trending Videos Fetcher for Malaysia
Uses YouTube Data API v3 to get trending videos
"""

import requests
import json
import os
from datetime import datetime

# YouTube Data API configuration
YOUTUBE_API_KEY = "AIzaSyAmGb4tB1npgVqU4lNECHAml5sNHSQqYeo"  # From your MCP config
YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3"

def get_trending_videos_malaysia(max_results=5):
    """
    Fetch trending videos in Malaysia
    
    Args:
        max_results (int): Number of videos to fetch (default: 5)
    
    Returns:
        list: List of trending video information
    """
    # YouTube API endpoint for trending videos
    url = f"{YOUTUBE_API_BASE_URL}/videos"
    
    # Parameters for the API request
    params = {
        'part': 'snippet,statistics,contentDetails',
        'chart': 'mostPopular',
        'regionCode': 'MY',  # Malaysia region code
        'maxResults': max_results,
        'key': YOUTUBE_API_KEY
    }
    
    try:
        # Make the API request
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        data = response.json()
        
        # Extract video information
        trending_videos = []
        for item in data.get('items', []):
            video_info = {
                'title': item['snippet']['title'],
                'channel': item['snippet']['channelTitle'],
                'video_id': item['id'],
                'url': f"https://www.youtube.com/watch?v={item['id']}",
                'description': item['snippet']['description'][:200] + "..." if len(item['snippet']['description']) > 200 else item['snippet']['description'],
                'published_at': item['snippet']['publishedAt'],
                'view_count': item['statistics'].get('viewCount', 'N/A'),
                'like_count': item['statistics'].get('likeCount', 'N/A'),
                'comment_count': item['statistics'].get('commentCount', 'N/A'),
                'duration': item['contentDetails']['duration'],
                'thumbnail': item['snippet']['thumbnails']['high']['url']
            }
            trending_videos.append(video_info)
        
        return trending_videos
        
    except requests.exceptions.RequestException as e:
        print(f"Error making API request: {e}")
        return []
    except KeyError as e:
        print(f"Error parsing response data: {e}")
        return []

def format_video_info(video, index):
    """Format video information for display"""
    return f"""
🎬 Video #{index}:
📍 Title: {video['title']}
📺 Channel: {video['channel']}
🔗 URL: {video['url']}
👀 Views: {video['view_count']}
👍 Likes: {video['like_count']}
💬 Comments: {video['comment_count']}
📅 Published: {video['published_at'][:10]}
📝 Description: {video['description']}
{"="*60}
"""

def main():
    """Main function to fetch and display trending videos"""
    print("🇲🇾 Fetching Top 5 Trending YouTube Videos in Malaysia...")
    print("="*60)
    
    # Fetch trending videos
    trending_videos = get_trending_videos_malaysia(5)
    
    if not trending_videos:
        print("❌ Failed to fetch trending videos. Please check your API key and internet connection.")
        return
    
    print(f"✅ Successfully fetched {len(trending_videos)} trending videos!")
    print("="*60)
    
    # Display each video
    for i, video in enumerate(trending_videos, 1):
        print(format_video_info(video, i))
    
    # Save to JSON file for reference
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"malaysia_trending_videos_{timestamp}.json"
    
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(trending_videos, f, indent=2, ensure_ascii=False)
        print(f"📁 Results saved to: {filename}")
    except Exception as e:
        print(f"⚠️ Warning: Could not save results to file: {e}")

if __name__ == "__main__":
    main() 