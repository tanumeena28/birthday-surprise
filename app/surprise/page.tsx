"use client"

import { motion } from "framer-motion"
import { Heart, Calendar, Camera } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SurprisePage() {
  const birthDate = "June 6th"

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-25 to-red-50 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
              opacity: 0.4,
            }}
            animate={{
              y: -100,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 8,
            }}
          >
            <Heart size={Math.random() * 15 + 8} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4"
          >
            Happy Birthday, My cutestttt Divu! 🎂💕
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center justify-center space-x-2 text-rose-600 text-xl"
          >
            <Calendar size={24} />
            <span className="font-semibold">{birthDate}</span>
          </motion.div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Camera className="text-rose-500 mr-2" size={28} />
            <h2 className="text-3xl font-bold text-rose-700">Our Beautiful Memories</h2>
          </div>

          {/* Couple Photos - First 3 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Photo 1: Group Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/couple-with-friends.jpg"
                      alt="Beautiful memories with friends"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        💕 We are looking perfect with each other
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 2: Anime Couple Art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/couple-anime.jpg"
                      alt="Our love in anime style"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🎨 Us in anime style!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 3: Concert Moment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/concert-moment.jpg"
                      alt="Magical concert moment together"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🎵 Lost in music, found in love
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 4: Stylish Couple Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/stylish-couple.jpg"
                      alt="Looking stylish together"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        ✨ You make me feel special
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 5: Beautiful Couple Selfie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/couple-selfie.jpg"
                      alt="Our beautiful moment together"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: "50% 30%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        💕 Perfect selfie, perfect us
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 6: Casual Couple Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/casual-couple.jpg"
                      alt="Perfect day together"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        😊 Perfect moments together
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 7: Intimate Moment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/intimate-moment.jpg"
                      alt="Our tender moment"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        💖 In your arms, I'm home
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 8: Evening Date */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/evening-date.jpg"
                      alt="Magical evening under the lights"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        ✨ Under the stars, with you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 13: Night Couple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.4, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/night-couple.jpg"
                      alt="Nighttime together"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🌙 Moonlight memories with you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Divu's Photos Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
            {/* Photo 9: Artistic Divu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/artistic-divu.jpg"
                      alt="My handsome Divu"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🖤 My artistic, handsome boy
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 10: Happy Divu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.0, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/happy-divu.jpg"
                      alt="My happy sunshine"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        😊 Your smile is my sunshine
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Photo 14: Night Divu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/night-divu.jpg"
                      alt="Mysterious night Divu"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🌃 Mysterious and handsome
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Birthday Calendar Row */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative w-full max-w-md"
            >
              <Card className="overflow-hidden shadow-xl border-2 border-rose-300 hover:border-rose-400 transition-all duration-300 ring-2 ring-rose-200">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/birthday-calendar.jpg"
                      alt="Your special day - June 6th"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black/40 rounded-lg px-3 py-2 backdrop-blur-sm">
                        🎂 Your special day is marked with love!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block"
                >
                  <Heart size={40} className="text-rose-500 mb-4" fill="currentColor" />
                </motion.div>
                <h3 className="text-3xl font-bold text-rose-700 mb-6">A Letter From My Heart</h3>
              </div>

              <div className="prose prose-lg prose-rose max-w-none text-center">
                <p className="text-xl leading-relaxed text-rose-800 mb-6">hiii my cutuuu..handsome divuu,</p>
                <p className="text-lg leading-relaxed text-rose-700 mb-6">
                  first I Love You so much..happy birthday mere laddu..mujhe samjh nhii aaya m kya kru ese dur rah ke
                  tere liye to m socha ye kar sakta hu kyuki tere liye nhi but mere liye boht special h na m to krunga.
                  tu janta mere se ese baitha nhi jata to ye chhoti si wishing website bnai h.. jyada achi to nhi h but
                  abhii kam chlao isi se hi or jyada nhi kar paya...so for my cutuu ke liye ye surprise h.
                </p>
                <p className="text-lg leading-relaxed text-rose-700 mb-6">
                  Hii baby...Happy Birthday To You little baby.chhota sa letter likha h ese hi..tujhe pta h tu kitni
                  mehnat karta h haa mana tujhe result nhi dikh rha abhi tk but sbr rakho tum sb acha karte tere sath
                  bura nhi hoga samjhe to kabhi khud ko ese underestimate mat kiya kro nhii to muh tod dungiii. Tu aaram
                  se sb kar m idr hu hmesha jb tujhe need h hmesha tere sath hu..bss kabhi kabhi to kalesh krungi hi na
                  ki baat nhii kii..pyar nhii karta .Tumse na krungi to kisse karungii or isse masala rahta na apne
                  relation me samjhee bhudhu...ab tumko bolna to pdega I love You itni overthinker or sensetive
                  girlfriend bhi tune bnai h..or pta h friend mtlb ye nhii sb bolne ke liye free hote ho bss itna h ki
                  tu jyada gor nhi karte baki girls hoti hi thodi sensetive h bss abhi tu thoda jyada dyan deta h ki kya
                  bol rhaa..bolo but thoda sa words me her fer karke samjhe bachuu... I know tu sb kuch achive kar lega
                  mujhe visvas h . tu sb se acha h pta h .sb ke baare me sochta h tere jaisa koi nhii h ya syd m bhi nhi
                  hu esi..boht pyara h tu like precious h tu mere liye...I Love you so much baby itna ki m bol nhi sakta
                  bss tu samjh jaa ab.
                </p>
                <p className="text-lg leading-relaxed text-rose-700 mb-6">
                  Thankyou mere sath rahne ke liye tujhe nhii pta tu kya h mere liye..mujhe sirf tu chahiye or tere se
                  tera sara pyara..hmesha khush rah..m hu idar jb tujhe need ho.
                </p>
                <p className="text-xl leading-relaxed text-rose-800 font-semibold">
                  Happy Birthday, my Divu! You are my little princess! 💕
                </p>
                <p className="text-lg text-rose-600 mt-8 italic">
                  Forever yours,
                  <br />
                  Your gullu gullu ❤️
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Hearts Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              >
                <Heart size={35} className="text-rose-400" fill="currentColor" />
              </motion.div>
            ))}
          </div>

          <motion.p
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-2xl font-bold text-rose-600"
          >
            Divu, I Love You More Than All The Stars! 💖✨
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
