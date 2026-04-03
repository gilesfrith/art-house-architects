#!/bin/bash
# Run this once from inside the project folder:
#   chmod +x download-images.sh
#   ./download-images.sh
#
# It downloads all site images from Wix and saves them to public/images/
# After this runs you no longer depend on Wix at all.

set -e
mkdir -p public/images
cd public/images

echo "Downloading site images from Wix..."

curl -L --silent --show-error -o hero.jpg \
  "https://static.wixstatic.com/media/07dab8_c8ff37e9f2e44e0cb79bc1ae83494c48~mv2_d_3268_1818_s_2.jpg/v1/fill/w_1920,h_1068,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_c8ff37e9f2e44e0cb79bc1ae83494c48~mv2_d_3268_1818_s_2.jpg"
echo "✓ hero.jpg"

curl -L --silent --show-error -o contemporary-classic.jpg \
  "https://static.wixstatic.com/media/07dab8_4237eacbace14fddb58ee73b2d532d4e~mv2_d_2000_1500_s_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_4237eacbace14fddb58ee73b2d532d4e~mv2_d_2000_1500_s_2.jpg"
echo "✓ contemporary-classic.jpg"

curl -L --silent --show-error -o mercer-kitchen.jpg \
  "https://static.wixstatic.com/media/07dab8_93499b217fce47028e44cf337fc255f1~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_93499b217fce47028e44cf337fc255f1~mv2.jpg"
echo "✓ mercer-kitchen.jpg"

curl -L --silent --show-error -o midcentury-addition-seattle.jpg \
  "https://static.wixstatic.com/media/07dab8_bc1bf2012eb6499486ec590a165288ea~mv2.jpg/v1/fill/w_980,h_623,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_bc1bf2012eb6499486ec590a165288ea~mv2.jpg"
echo "✓ midcentury-addition-seattle.jpg"

curl -L --silent --show-error -o craftsman-remodel.jpg \
  "https://static.wixstatic.com/media/07dab8_f2d77a6b53ac4476929be83e88eae542~mv2.jpg/v1/fill/w_980,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_f2d77a6b53ac4476929be83e88eae542~mv2.jpg"
echo "✓ craftsman-remodel.jpg"

curl -L --silent --show-error -o midcentury-addition-vashon.jpg \
  "https://static.wixstatic.com/media/07dab8_62adee73014448caa1b49e1f99dc4450~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_62adee73014448caa1b49e1f99dc4450~mv2_d_3264_2448_s_4_2.jpg"
echo "✓ midcentury-addition-vashon.jpg"

curl -L --silent --show-error -o black-and-white.jpg \
  "https://static.wixstatic.com/media/07dab8_e0b7bdc1f6934c57a2af1e8cf50be16a~mv2_d_4809_3229_s_4_2.jpg/v1/fill/w_980,h_658,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_e0b7bdc1f6934c57a2af1e8cf50be16a~mv2_d_4809_3229_s_4_2.jpg"
echo "✓ black-and-white.jpg"

curl -L --silent --show-error -o a-frame.jpg \
  "https://static.wixstatic.com/media/07dab8_5aad2deda0dc45208bf62033187cf583~mv2_d_1500_2000_s_2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_5aad2deda0dc45208bf62033187cf583~mv2_d_1500_2000_s_2.jpg"
echo "✓ a-frame.jpg"

curl -L --silent --show-error -o unbuilt-work.jpg \
  "https://static.wixstatic.com/media/07dab8_c8ff37e9f2e44e0cb79bc1ae83494c48~mv2_d_3268_1818_s_2.jpg/v1/fill/w_980,h_545,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07dab8_c8ff37e9f2e44e0cb79bc1ae83494c48~mv2_d_3268_1818_s_2.jpg"
echo "✓ unbuilt-work.jpg"

curl -L --silent --show-error -o about-header.jpg \
  "https://static.wixstatic.com/media/07dab8_8769d863ae274a91ac2eb4dfbd435d14~mv2.jpg/v1/fill/w_1221,h_816,al_c,q_85,enc_avif,quality_auto/07dab8_8769d863ae274a91ac2eb4dfbd435d14~mv2.jpg"
echo "✓ about-header.jpg"

curl -L --silent --show-error -o susan-frith.jpg \
  "https://static.wixstatic.com/media/07dab8_65d78ec811cd4549836a54d46a4b1da3~mv2.jpg/v1/crop/x_0,y_172,w_2048,h_2896/fill/w_600,h_850,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2021_78FavoriteEdited%E2%80%94Stylized.jpg"
echo "✓ susan-frith.jpg"

echo ""
echo "All done! $(ls | wc -l | tr -d ' ') images saved to public/images/"
echo "Total size: $(du -sh . | cut -f1)"
